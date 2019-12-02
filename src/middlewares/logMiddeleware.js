export const logMiddeleware = ({ getState }) => next => action => {
  console.log('Redux Logger - before', action.type, getState());
  next(action);
  console.log('Redux Logger - after', action.type, getState());
};
