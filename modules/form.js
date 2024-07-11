import { radio } from "./radioBox.js";

const form = `
<form class="px-4 sm:px-8 pt-4 sm:pt-8  md:flex-1 md:p-5 md:px-8"   >
    <fieldset class="mb-3 sm:flex items-center justify-between">
    <div>
    <legend class="text-xl md:text-[1rem] font-bold">
        Mortgage Calculator
      </legend>
    </div>      
      <div>
        <button id="clear" class="underline">Clear all</button>
      </div>      
    </fieldset>
    <fieldset class="flex flex-col mb-4 md:mb-0">
        <label for="mortgage-amount" class="text-slate-500 md:text-[14px]">Mortgage Amount</label>
        <div class="fildeset-inputs" id="amount">
          <span class="bg-slate-200 text-slate-500 px-3 py-2 rounded-bl-md rounded-tl-md">$</span>
          <input type="text" name="amount" value="" id="mortgage-amount" class="outline-none flex-1 b-radius bg-transparent "  />          
        </div>
        <span id='amount-error' class="text-red-500 md:text-[14px]"></span>        
    </fieldset>
    <div class="sm:flex sm:justify-between md:gap-5 md:mt-3 md:mb-5 ">
    <fieldset class="flex flex-col mb-4 md:mb-0 ]  md:flex-1  md:flex">
        <label for="mortgage-term" class="text-slate-500 md:text-[14px]">Mortgage Term</label>
        <div class="fildeset-inputs" id="term">
         <input type="text" name="term" id="mortgage-term"  class="outline-none md:w-full   bg-transparent pl-2"  />
         <span class="bg-slate-200 text-slate-500 px-3 py-2 b-radius">years</span>
        </div>
        <span id="term-error" class="text-red-500 md:text-[14px]"></span>       
    </fieldset>
    <fieldset class="flex flex-col mb-4 md:mb-0  md:flex-1  md:flex">
        <label for="interest" class="text-slate-500 md:text-[14px]">Interest Rate</label>
        <div class="fildeset-inputs " id="rate">
          <input type="text" name="rate" id="mortgage-interest"  class="outline-none md:w-full  bg-transparent pl-2"  />
          <span class="bg-slate-200 text-slate-500 px-3 py-2 b-radius" >%</span>
        </div>
        <span id="rate-error" class="text-red-500 md:text-[14px]"></span>       
    </fieldset>
    </div>
      ${radio}
    <div class="flex items-center justify-center mt-5 px-2 py-3  bg-lime hover:bg-amber-200 rounded-3xl sm:w-[70%] ">
      <button id="calculate-repayments" type="submit" class="flex gap-2 font-bold ">
      <img src="/assets/images/icon-calculator.svg" alt="" />
      Calculate Repayments
      </button>
    </div>
</form>
`;

export { form };
