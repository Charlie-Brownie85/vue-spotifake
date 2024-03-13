import type { RouteLocation } from 'vue-router';

import {
  AuthState,
  getAuthToken,
  initAuth,
} from '@/composables/useAuth';

export async function validateAccess(to: RouteLocation) {
  const { meta } = to;

  if (!AuthState.initialized) {
    try {
      await initAuth();
    } catch (error) {
      return { name: 'Error' };
    }
  }

  if (!meta?.requiresAuth) {
    return true;
  }

  if (!AuthState.isAuthenticated) {
    try {
      await getAuthToken();
    } catch (error) {
      return { name: 'Error' };
    }
  }
  return true;
}
