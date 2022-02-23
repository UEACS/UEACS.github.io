var currency = 'GBP' // https://www.currency-iso.org/dam/downloads/lists/list_one.xml

function rescanCurrencyInputs()
{
	var currencyInputs = document.querySelectorAll('input[type="currency"]');

	for (let currencyInput of currencyInputs)
	{
		// bind event listeners
		currencyInput.addEventListener('focus', onFocus);
		currencyInput.addEventListener('focusout', onBlur);
	}
}

function localStringToNumber( s )
{
	return Number(String(s).replace(/[^0-9.-]+/g,""));
}

function onFocus(e)
{
	console.log("Focussed with value "+e.target.value+" and placeholder "+e.target.placeholder);
	var formattedValue = e.target.value;
	e.target.value = e.target.placeholder; // Loads the last written value stored in placeholder
}

function onBlur(e)
{
	console.log("Value: "+e.target.value+" Placeholder: "+e.target.placeholder);
	e.target.value = e.target.value.substring(0,1) == "£" ? e.target.value.substring(1):e.target.value // Removes £ if there is one at the start

	e.target.placeholder = e.target.value; // Stores the written value in the placeholder

	var options = {
		maximumFractionDigits : 2,
		currency              : currency,
		style                 : "currency",
		currencyDisplay       : "symbol"
	}

	// Displays formatted and evaluated value
	console.log("Written "+e.target.value);
	e.target.value = (eval(e.target.value) || eval(e.target.value) === 0)
		? localStringToNumber(eval(e.target.value)).toLocaleString(undefined, options)
		: ''
	console.log("Formatted "+e.target.value);
}