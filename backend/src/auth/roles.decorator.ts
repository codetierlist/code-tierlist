import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/types';

export const ROLE_KEY = 'role';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLE_KEY, roles);