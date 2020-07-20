export const Types = {
  SET_VALUES: 'plans/SET_VALUES',
  GET_VALUES: 'plans/GET_VALUES',
};

export const INITIAL_STATE = {
  data: [
    {
      id: null,
      name: null,
      originalPrice: null,
      cycle: null,
    },
  ],
};

export default function plan(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_VALUES:
      return { ...state };
    case Types.SET_VALUES:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPlan: () => ({
    type: Types.GET_VALUES,
  }),

  setPlan: (data) => ({
    type: Types.SET_VALUES,
    payload: { data },
  }),
};
