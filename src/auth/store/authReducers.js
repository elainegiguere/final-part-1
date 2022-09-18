const reducers = {
	updateEmail: (state, action) => {
		state = { ...state, email: action.payload };
	},
	updatePassword: (state, action) => {
		state = { ...state, password: action.payload };
	},
	updateWholeUser: (state, action) => {
		const id = state.id + 1;
		state= { ...action.payload, id : id };
	}
}

export default reducers;
