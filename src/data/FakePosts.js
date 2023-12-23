import { v4 } from "uuid";
export default function postsGenerator (numEntries) {
    const entries = []
    for(let i = 0; i < numEntries; i++) {
        entries.push({
            id: v4().slice(0,6),
            date: '12/25/1999',
            title: 'placeholder title',
            text: generateLoremIpsumParagraphs(Math.floor((Math.random()) * 10))
        })
    }
    return entries
}
function generateLoremIpsumParagraphs(numParagraphs) {
    const loremIpsumSentence = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    let loremIpsumText = "";
  
    for (let i = 0; i < numParagraphs; i++) {
      loremIpsumText += `${loremIpsumSentence}\n\n`;
    }
  
    return loremIpsumText;
  }
  
 
  