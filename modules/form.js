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
    <fieldset class="flex flex-col mb-4">
        <label for="mortgage-amount">Mortgage Amount</label>
        <div class="fildeset-inputs" id="amount">
          <span class="bg-slate-200 text-slate-500 px-3 py-2 rounded-bl-md rounded-tl-md">$</span>
          <input type="text" name="amount" value="" id="mortgage-amount" class="outline-none flex-1 b-radius bg-transparent "  />          
        </div>
        <span id='amount-error' class="text-red-500"></span>        
    </fieldset>
    <fieldset class="flex flex-col mb-4">
        <label for="mortgage-term">Mortgage Term</label>
        <div class="fildeset-inputs" id="term">
         <input type="text" name="term" id="mortgage-term"  class="outline-none flex-1 bg-transparent pl-2"  />
         <span class="bg-slate-200 text-slate-500 px-3 py-2 b-radius">years</span>
        </div>
        <span id="term-error" class="text-red-500"></span>       
    </fieldset>
    <fieldset class="flex flex-col mb-4">
        <label for="interest">Interest Rate</label>
        <div class="fildeset-inputs" id="rate">
          <input type="text" name="rate" id="mortgage-interest"  class="outline-none flex-1 bg-transparent pl-2"  />
          <span class="bg-slate-200 text-slate-500 px-3 py-2 b-radius" >%</span>
        </div>
        <span id="rate-error" class="text-red-500"></span>       
    </fieldset>
      ${radio}
    <div class="flex items-center justify-center mt-5 px-2 py-3 bg-lime rounded-3xl">
      <button id="calculate-repayments" type="submit" class="flex gap-2 font-bold">
      <img src="../assets/images/icon-calculator.svg" alt="" />
      Calculate Repayments
      </button>
    </div>
</form>
`;

export { form };
