function validateEmpty(value?: string) {
	if (!value || value.trim().length < 1) {
		return "Value can not be empty";
	}
}

export default validateEmpty;
