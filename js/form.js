import { radio } from './radioBox.js';
const form = `
<form class="px-4 pt-4">
    <fieldset class="mb-3 sm:flex items-center justify-between">
    <div>
    <legend class="text-xl font-bold">
        Mortgage Calculator
      </legend>
    </div>
      
      <div>
        <button id="clear" class="underline">Clear all</button>
      </div>      
    </fieldset>
    <fieldset class="flex flex-col ">
        <label for="mortgage-amount">Mortgage Amount</label>
        <div class="fildeset-inputs">
        <span>$</span>
        <input type="text" id="mortgage-amount" class="outline-none flex-1" />
        </div>        
    </fieldset>
    <fieldset class="flex flex-col">
        <label for="mortgage-term">Mortgage Term</label>
        <div class="fildeset-inputs">
         <input type="text" id="mortgage-term"  class="outline-none flex-1"  />
         <span>years</span>
        </div>       
    </fieldset>
    <fieldset class="flex flex-col">
        <label for="interest">Interest Rate</label>
        <div class="fildeset-inputs">
          <input type="text" id="interest"  class="outline-none flex-1"  />
          <span>%</span>
        </div>        
    </fieldset>
      ${radio}
</form>
`;

export { form };
