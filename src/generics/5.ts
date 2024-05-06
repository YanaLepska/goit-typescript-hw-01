export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
type Roles = Record<UserRole, string>;


const RoleDescription: Roles = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};
