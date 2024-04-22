// Import the functions to be tested
const { addEntry, editEntry, deleteEntry } = require('./journalFunctions');

describe('Journaling Application', () => {
  describe('addEntry function', () => {
    it('should add a new entry to the journal', () => {
      const initialEntries = ['Entry 1', 'Entry 2'];
      const newEntry = 'New Entry';
      addEntry(initialEntries, newEntry);
      expect(initialEntries).toContain(newEntry);
    });

    it('should handle empty entry', () => {
      const initialEntries = ['Entry 1', 'Entry 2'];
      const newEntry = '';
      expect(() => addEntry(initialEntries, newEntry)).toThrow('Entry cannot be empty');
    });
  });

  describe('editEntry function', () => {
    it('should edit an existing entry in the journal', () => {
      const initialEntries = ['Entry 1', 'Entry 2'];
      const index = 1;
      const updatedEntry = 'Updated Entry';
      editEntry(initialEntries, index, updatedEntry);
      expect(initialEntries[index]).toBe(updatedEntry);
    });

    it('should handle invalid index', () => {
      const initialEntries = ['Entry 1', 'Entry 2'];
      const index = 3;
      const updatedEntry = 'Updated Entry';
      expect(() => editEntry(initialEntries, index, updatedEntry)).toThrow('Invalid index');
    });
  });

  describe('deleteEntry function', () => {
    it('should delete an existing entry from the journal', () => {
      const initialEntries = ['Entry 1', 'Entry 2'];
      const index = 1;
      deleteEntry(initialEntries, index);
      expect(initialEntries).not.toContain('Entry 2');
    });

    it('should handle invalid index', () => {
      const initialEntries = ['Entry 1', 'Entry 2'];
      const index = 3;
      expect(() => deleteEntry(initialEntries, index)).toThrow('Invalid index');
    });
  });
});