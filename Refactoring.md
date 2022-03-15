# Refactoring Kata Test

I extracted all the logic from the [DomainFilter](/src/components/DomainFilter/DomainFilter.component.tsx) component and moved it into a [utils](/src/utils/utils.tsx) file.

- no unused code
- use strict equality
- Do not mutate state directly. Use setState(), no push() method
- do not use several functions doing the same thing, use one function and apply it everywhere it is possible
- no duplicate code