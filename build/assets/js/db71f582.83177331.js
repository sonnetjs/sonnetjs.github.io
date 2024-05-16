"use strict";(self.webpackChunksonnet_docs=self.webpackChunksonnet_docs||[]).push([[9964],{4876:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=s(4848),r=s(8453);const a={slug:"regex-expressions-in-js",title:"Regex Expressions in JS",authors:{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4"},tags:["javascript"]},i="Regex Expressions in JS",c={permalink:"/blog/regex-expressions-in-js",editUrl:"https://github.com/sonnetjs/sonnetjs.github.io/tree/main/blog/javascript/11-regex-expressions-in-js.md",source:"@site/blog/javascript/11-regex-expressions-in-js.md",title:"Regex Expressions in JS",description:"JavaScript is a programming language that supports regular expressions (regex). A regular expression is a sequence of characters that specifies a search pattern. With regex, we can search and manipulate text data in a more efficient and flexible way. In this document, we will explore how to use regular expressions in JavaScript.",date:"2024-05-15T13:15:30.641Z",tags:[{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:5.01,hasTruncateMarker:!0,authors:[{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4",imageURL:"https://avatars.githubusercontent.com/u/58030954?v=4"}],frontMatter:{slug:"regex-expressions-in-js",title:"Regex Expressions in JS",authors:{name:"Talha Mujahid",title:"Software Engineer",url:"https://github.com/htmujahid",image_url:"https://avatars.githubusercontent.com/u/58030954?v=4",imageURL:"https://avatars.githubusercontent.com/u/58030954?v=4"},tags:["javascript"]},unlisted:!1,prevItem:{title:"Protype in JS",permalink:"/blog/protype-in-js"},nextItem:{title:"Object Methods in JS",permalink:"/blog/object-methods-in-js"}},h={authorsImageUrls:[void 0]},l=[];function o(e){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"JavaScript is a programming language that supports regular expressions (regex). A regular expression is a sequence of characters that specifies a search pattern. With regex, we can search and manipulate text data in a more efficient and flexible way. In this document, we will explore how to use regular expressions in JavaScript."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flags:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**g**"}),": Global match. This flag indicates that the regular expression should match all occurrences in the input string, rather than just the first one."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**i**"}),": Case-insensitive match. This flag indicates that the regular expression should match regardless of the casing of the input string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**m**"}),": Multiline match. This flag indicates that the regular expression should match across multiple lines of the input string."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Patterns:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Matching any character: ",(0,t.jsx)(n.code,{children:"**.**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching any digit: ",(0,t.jsx)(n.code,{children:"**\\\\d**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching any non-digit: ",(0,t.jsx)(n.code,{children:"**\\\\D**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching any whitespace character: ",(0,t.jsx)(n.code,{children:"**\\\\s**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching any non-whitespace character: ",(0,t.jsx)(n.code,{children:"**\\\\S**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching any word character: ",(0,t.jsx)(n.code,{children:"**\\\\w**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching any non-word character: ",(0,t.jsx)(n.code,{children:"**\\\\W**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching a specific number of characters: ",(0,t.jsx)(n.code,{children:"**{n}**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching zero or more occurrences: ",(0,t.jsx)(n.strong,{children:"``"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching one or more occurrences: ",(0,t.jsx)(n.code,{children:"**+**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching zero or one occurrence: ",(0,t.jsx)(n.code,{children:"**?**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching the start of a string: ",(0,t.jsx)(n.code,{children:"**^**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching the end of a string: ",(0,t.jsx)(n.code,{children:"**$**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching a range of characters: ",(0,t.jsx)(n.code,{children:"**[abc]**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching any character not in a range: ",(0,t.jsx)(n.code,{children:"**[^abc]**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching any character in a range of characters: ",(0,t.jsx)(n.code,{children:"**[a-z]**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching any character not in a range of characters: ",(0,t.jsx)(n.code,{children:"**[^a-z]**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching any character except newline: ",(0,t.jsx)(n.code,{children:"**[\\\\s\\\\S]**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching a specific character: ",(0,t.jsx)(n.code,{children:"**\\**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching a specific word boundary: ",(0,t.jsx)(n.code,{children:"**\\\\b**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching a negative word boundary: ",(0,t.jsx)(n.code,{children:"**\\\\B**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Capturing a group of characters: ",(0,t.jsx)(n.code,{children:"**( )**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Non-capturing a group of characters: ",(0,t.jsx)(n.code,{children:"**(?: )**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching one of several patterns: ",(0,t.jsx)(n.code,{children:"**(pattern1|pattern2|pattern3)**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Using a backreference to match a previous captured group: ",(0,t.jsx)(n.code,{children:"**\\\\n**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching any number of characters lazily: ",(0,t.jsx)(n.code,{children:"**?**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching one or more characters lazily: ",(0,t.jsx)(n.code,{children:"**+?**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Matching a specific number of characters lazily: ",(0,t.jsx)(n.code,{children:"**{n}?**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Using lookahead to match a pattern only if it\u2019s followed by another pattern: ",(0,t.jsx)(n.code,{children:"**(?= )**"})]}),"\n",(0,t.jsxs)(n.li,{children:["Using lookbehind to match a pattern only if it\u2019s preceded by another pattern: ",(0,t.jsx)(n.code,{children:"**(?<= )**"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'// Matches all occurrences of the word "dog"  \nconst regex = /dog/g;  \n// Matches the word "hello" regardless of case  \nconst regex = /hello/i;  \n// Matches the pattern "cat" at the beginning of a string  \nconst regex = /^cat/;  \n// Matches the pattern "bat" at the end of a string  \nconst regex = /bat$/;  \n// Matches any vowel character  \nconst regex = /[aeiou]/;  \n// Matches any non-vowel character  \nconst regex = /[^aeiou]/;  \n// Matches either "cat" or "dog"  \nconst regex = /cat|dog/;  \n// Groups together "hello" and "world" and captures the result  \nconst regex = /(hello) (world)/;\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Most Used Regex Patterns"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Email addresses:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**\\\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\\.[A-Z|a-z]{2,}\\\\b**"})," - this matches most standard email addresses and ensures that the domain name ends with at least two letters."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"2. Phone numbers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**\\\\b\\\\d{3}[-.]?\\\\d{3}[-.]?\\\\d{4}\\\\b**"})," - this matches most US phone numbers, with or without dashes or periods between groups of digits."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"3. URLs:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**(http(s)?://)?([\\\\w-]+\\\\.)+[\\\\w-]+(/[\\\\w- ;,./?%&=]*)?**"})," - this matches most standard URLs, including those with or without the ",(0,t.jsx)(n.code,{children:"**http://**"})," or ",(0,t.jsx)(n.code,{children:"**https://**"})," prefixes, and with or without query parameters."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"4. Postal codes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**[A-Z]\\\\d[A-Z] ?\\\\d[A-Z]\\\\d**"})," - this matches most Canadian postal codes, which have the format A1A 1A1, with the first three characters being a letter, followed by a digit, followed by another letter, and then a space, and then a digit, followed by another letter, and then a digit."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"5. IP addresses:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**\\\\b\\\\d{1,3}\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}\\\\.\\\\d{1,3}\\\\b**"})," - this matches most standard IP addresses, with each group of digits separated by periods."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"6. Dates:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**\\\\b\\\\d{1,2}[\\\\/\\\\-]\\\\d{1,2}[\\\\/\\\\-]\\\\d{4}\\\\b**"})," - this matches most standard date formats, with the month and day separated by either a slash or a dash, and the year consisting of four digits."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"7. Credit card numbers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**\\\\b\\\\d{4}([ \\\\-]?\\\\d{4}){3}\\\\b**"})," - this matches most standard credit card numbers, with groups of four digits separated by either spaces or dashes."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"8. Social Security numbers:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**\\\\b\\\\d{3}[ \\\\-]?\\\\d{2}[ \\\\-]?\\\\d{4}\\\\b**"})," - this matches most standard SSN formats, with groups of three, two, and four digits separated by either spaces or dashes."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"9. File paths:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"**^[A-Za-z]:[\\\\\\\\/].***"})," - this matches most standard file paths on Windows systems, with the drive letter followed by a colon, and then the rest of the path separated by either backslashes or forward slashes."]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"creating-a-regex-object",children:"Creating a Regex Object"}),"\n",(0,t.jsxs)(n.p,{children:["In JavaScript, we can create a regex object using the ",(0,t.jsx)(n.code,{children:"RegExp"})," constructor or by using a regex literal. Here is an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Using RegExp constructor  \nlet regex1 = new RegExp('hello');  \nconsole.log(regex1.test('hello world')); // true  \n// Using regex literal  \nlet regex2 = /hello/;  \nconsole.log(regex2.test('world hello')); // true\n"})}),"\n",(0,t.jsx)(n.h1,{id:"matching-a-pattern",children:"Matching a Pattern"}),"\n",(0,t.jsxs)(n.p,{children:["To match a pattern in a string, we can use the ",(0,t.jsx)(n.code,{children:"match"})," method. This method returns an array of matches or ",(0,t.jsx)(n.code,{children:"null"})," if no matches are found. Here is an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'let str = \'The quick brown fox jumps over the lazy dog\';  \nlet regex = /the/gi;  \nlet matches = str.match(regex);  \nconsole.log(matches); // ["The", "the"]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we used the ",(0,t.jsx)(n.code,{children:"g"})," and ",(0,t.jsx)(n.code,{children:"i"}),' flags to match all occurrences of the word "the" in a case-insensitive way.']}),"\n",(0,t.jsx)(n.h1,{id:"replacing-a-pattern",children:"Replacing a Pattern"}),"\n",(0,t.jsxs)(n.p,{children:["To replace a pattern in a string, we can use the ",(0,t.jsx)(n.code,{children:"replace"})," method. This method returns a new string with the replaced value. Here is an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let str = 'JavaScript is a popular programming language';  \nlet regex = /JavaScript/;  \nlet newStr = str.replace(regex, 'JS');  \nconsole.log(newStr); // \"JS is a popular programming language\"\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we used the ",(0,t.jsx)(n.code,{children:"replace"}),' method to replace the word "JavaScript" with "JS" in the string.']}),"\n",(0,t.jsx)(n.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["Regular expressions are a powerful tool in JavaScript for searching and manipulating text data. We can create regex objects using the ",(0,t.jsx)(n.code,{children:"RegExp"})," constructor or regex literals. We can match a pattern using the ",(0,t.jsx)(n.code,{children:"match"})," method and replace a pattern using the ",(0,t.jsx)(n.code,{children:"replace"})," method. With regular expressions, we can write more efficient and flexible code."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);