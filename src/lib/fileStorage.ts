// File storage service to handle File objects outside Redux
// This prevents non-serializable File objects from being stored in Redux state

class FileStorageService {
  private files: Map<string, File> = new Map();
  private fileCounter = 0;

  /**
   * Adds files to storage and returns metadata for Redux
   */
  addFiles(files: File[]): Array<{ id: string; name: string; size: number; type: string; lastModified: number }> {
    return files.map(file => {
      const id = `file_${Date.now()}_${this.fileCounter++}`;
      this.files.set(id, file);

      return {
        id,
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified
      };
    });
  }

  /**
   * Adds a single file to storage and returns metadata
   */
  addFile(file: File): { id: string; name: string; size: number; type: string; lastModified: number } {
    const id = `file_${Date.now()}_${this.fileCounter++}`;
    this.files.set(id, file);

    return {
      id,
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified
    };
  }

  /**
   * Removes a file from storage by ID
   */
  removeFile(id: string): boolean {
    return this.files.delete(id);
  }

  /**
   * Gets a file from storage by ID
   */
  getFile(id: string): File | undefined {
    return this.files.get(id);
  }

  /**
   * Gets all files as an array
   */
  getAllFiles(): File[] {
    return Array.from(this.files.values());
  }

  /**
   * Gets files by their IDs
   */
  getFilesByIds(ids: string[]): File[] {
    return ids.map(id => this.files.get(id)).filter((file): file is File => file !== undefined);
  }

  /**
   * Clears all files from storage
   */
  clearAll(): void {
    this.files.clear();
    this.fileCounter = 0;
  }

  /**
   * Gets the count of stored files
   */
  getFileCount(): number {
    return this.files.size;
  }

  /**
   * Checks if a file exists by ID
   */
  hasFile(id: string): boolean {
    return this.files.has(id);
  }
}

// Export singleton instance
export const fileStorage = new FileStorageService();

// Export types
export interface FileMetadata {
  id: string;
  name: string;
  size: number;
  type: string;
  lastModified: number;
}
