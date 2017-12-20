export interface IAction {
  type: string;
  meta?: any;
  payload?: any;
  error?: boolean;
}

export const start = (dispatch, action: IAction) => {
  const { type, meta, payload } = action;
  return dispatch({
    type,
    meta: Object.assign({}, { status: "start" }, meta),
    payload
  });
};

export const done = (dispatch, action: IAction) => {
  const { type, meta, payload } = action;
  return dispatch({
    type,
    meta: Object.assign({}, { status: "done" }, meta),
    payload
  });
};

export const failed = (dispatch, action: IAction) => {
  const { type, meta, payload } = action;
  return dispatch({
    type,
    meta: Object.assign({}, { status: "failed" }, meta),
    payload,
    error: true
  });
};
