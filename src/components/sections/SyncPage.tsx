import { useState } from 'react';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';

interface SyncTarget {
  id: string;
  label: string;
  value: string;
}

const syncTargets: SyncTarget[] = [
  { id: 'all', label: 'All', value: 'all' },
  { id: 'organizations', label: 'Organizations', value: 'organizations' },
  { id: 'menu', label: 'Menu', value: 'menu' },
  { id: 'terminal_groups', label: 'Terminal Groups', value: 'terminal_groups' },
  { id: 'payment_types', label: 'Payment Types', value: 'payment_types' },
  { id: 'tables', label: 'Tables', value: 'tables' },
  { id: 'stop_lists', label: 'Stop Lists', value: 'stop_lists' },
];

export default function SyncPage() {
  const [selectedTargets, setSelectedTargets] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [syncResult, setSyncResult] = useState<string>('');

  const baseUrl = import.meta.env.VITE_BASE_URL || '';

  const handleCheckboxChange = (targetValue: string) => {
    if (targetValue === 'all') {
      if (selectedTargets.includes('all')) {
        setSelectedTargets([]);
      } else {
        setSelectedTargets(['all']);
      }
    } else {
      setSelectedTargets((prev) => {
        const filtered = prev.filter((t) => t !== 'all');
        if (prev.includes(targetValue)) {
          return filtered.filter((t) => t !== targetValue);
        } else {
          return [...filtered, targetValue];
        }
      });
    }
  };

  const handleSync = async () => {
    if (selectedTargets.length === 0) {
      setSyncResult('Please select at least one target');
      return;
    }

    setIsLoading(true);
    setSyncResult('');

    try {
      const response = await fetch(`${baseUrl}/iiko/sync/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ targets: selectedTargets }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSyncResult('Sync completed successfully!');
      } else {
        setSyncResult(`Sync failed: ${data.message || 'Unknown error'}`);
      }
    } catch (error) {
      setSyncResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">iiko Sync</h1>
      
      <div className="space-y-4 mb-6">
        <p className="text-sm text-gray-600">Select targets to sync:</p>
        
        {syncTargets.map((target) => (
          <div key={target.id} className="flex items-center space-x-2">
            <Checkbox
              id={target.id}
              checked={selectedTargets.includes(target.value)}
              onCheckedChange={() => handleCheckboxChange(target.value)}
              disabled={isLoading}
            />
            <label
              htmlFor={target.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {target.label}
            </label>
          </div>
        ))}
      </div>

      <Button
        onClick={handleSync}
        disabled={isLoading || selectedTargets.length === 0}
        className="w-full"
      >
        {isLoading ? 'Syncing...' : 'Start Sync'}
      </Button>

      {syncResult && (
        <div
          className={`mt-4 p-4 rounded ${
            syncResult.includes('success')
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {syncResult}
        </div>
      )}
    </div>
  );
}
