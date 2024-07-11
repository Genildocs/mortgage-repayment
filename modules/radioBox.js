const radio = `
    <fieldset>
        <legend class="font-semibold text-slate-500 md:text-[14px]">Mortgage type</legend>
        <div class="i-radio my-3">
            <input type="radio" value="Repayment" id="repayment" name="mortgage" class="cursor-pointer"  />
            <label for="fixed">Repayment</label>
        </div>
        <div class="i-radio">
            <input type="radio" value="Interest-Only" name="mortgage" id="interest-only" class="cursor-pointer" />
            <label for="interest-only">Interest Only</label>
        </div>
    </fieldset>
    <span id="radio-error" class="text-red-500 md:text-[14px]"></span> 
`;
export { radio };
