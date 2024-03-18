export const selectTasks = state => state.tasks.tasks;
export const selectIsLoading = state => state.tasks.isLoading;
export const selectErrorTasks = state => state.tasks.error;

export const selectFilter = state => state.color.filter;
export const selectPriorities = state => state.color.priorities;

export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectErrorUser = state => state.auth.error;

// export const selectIsRefreshing = state => state.auth.isRefreshing;
// export const selectIsLoggedIn = state => state.auth.isLoggedIn;
