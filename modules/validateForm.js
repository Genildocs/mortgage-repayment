import Joi from "joi";

function validateForm(amount, term, rate, repayment, interest) {
	const schema = Joi.object({
		amount: Joi.number().min(1).required(),
		term: Joi.number().min(1).max(50).required(),
		rate: Joi.number().required(),
		repayment: Joi.required(),
		interest: Joi.required(),
	});

	const { error, value } = schema.validate({
		amount: parseFloat(amount.value),
		term: parseFloat(term.value),
		rate: parseFloat(rate.value),
		repayment: repayment.checked,
		interest: interest.checked,
	});

	return { error, value };
}

export {validateForm}