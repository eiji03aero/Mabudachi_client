const logger = ( store: any ) => ( next: any ) => ( action: any ) => {
  let result;
  console.groupCollapsed('Dispatching: ', action.type);
  console.log('prev state: ', store.getState());
  console.log('action: ', action);
  result = next(action);
  console.log('next state: ', store.getState());
  console.groupEnd();
  return result;
}

export default logger;
