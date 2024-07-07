import { radio } from "./radioBox.js";

const form = `
<form class="px-4 pt-4"  >
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
          <input type="text" name="amount" value="" id="mortgage-amount" class="outline-none flex-1" />          
        </div>
        <span id='amount-error' class="text-red-500"></span>        
    </fieldset>
    <fieldset class="flex flex-col">
        <label for="mortgage-term">Mortgage Term</label>
        <div class="fildeset-inputs">
         <input type="text" name="term" id="mortgage-term"  class="outline-none flex-1"  />
         <span>years</span>
        </div>
        <span id="term-error" class="text-red-500"></span>       
    </fieldset>
    <fieldset class="flex flex-col">
        <label for="interest">Interest Rate</label>
        <div class="fildeset-inputs">
          <input type="text" name="rate" id="mortgage-interest"  class="outline-none flex-1"  />
          <span>%</span>
        </div>
        <span id="rate-error" class="text-red-500"></span>       
    </fieldset>
      ${radio}
    <div class="flex items-center justify-center mt-5 p-2 bg-yellow-500 rounded-2xl">
      <button id="calculate-repayments" type="submit" class="flex gap-2 font-bold">
      <img src="../assets/images/icon-calculator.svg" alt="" />
      Calculate Repayments
      </button>
    </div>
</form>
`;

export { form };
