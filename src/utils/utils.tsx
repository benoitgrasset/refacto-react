const getDistinctValues = (array: string[]) => array.filter((e, i, l) => l.indexOf(e) === i);

export const getCountries = (domains: string[]) => getDistinctValues(domains.map(domain => 
    domain.substring(0, 2)));

export const getClassifications = (domains: string[]) => getDistinctValues(domains.map(domain => 
    domain.substring(3, 5)));

export const getSubClassifications = (domains: string[]) => getDistinctValues(domains.map(domain => 
    domain.substring(6)));