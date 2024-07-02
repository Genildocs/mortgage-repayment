import { radio } from './radioBox.js';
const form = `
<form class="px-4 pt-4">
    <fieldset class="mb-3">
      <legend class="text-xl font-bold">
        Mortgage Calculator
      </legend>
      <button id="clear" class="underline">Clear all</button>
      </fieldset>
      <fieldset class="flex flex-col">
        <label for="mortgage-amount">Mortgage Amount</label>
        <input type="text" id="mortgage-amount" />
      </fieldset>
      <fieldset class="flex flex-col">
        <label for="mortgage-term">Mortgage Term</label>
        <input type="text" id="mortgage-term" />
      </fieldset>
      <fieldset class="flex flex-col">
        <label for="interest">Interest Rate</label>
        <input type="text" id="interest" />
      </fieldset>
      ${radio}
</form>

`;

export { form };
