## Reflection

My thoughts about my own code after reading the first two chapters from Clean Code is that I often tend to focus on functionality in the sense of making the class or method do what I need. This leads to methods having side effects, multiple levels of abstractions and no command query separation. 

Only focusing on making an application or module do it’s main purpose can lead to code that often repeats itself. Where a lot of my functions have multiple levels of abstractions they also repeat the same logic that already exists in another function. If the repetitive and low level logic would be extracted into separate functions this would make my code a lot more clean, structured and less repetitive. 

When it comes to naming I do think that I tend to stick to short and descriptive names in my classes. What I haven't been taking into consideration is that classes should have nouns and not verbs so that is new knowledge that I will take with me for future projects. 

Something that I have also learnt is that best practice is to have methods with niladic, or at most monadic, arguments. This is something I have tried to implement in my module but definitely need to practice more. 

My biggest takeaway from the chapters is how much clean code helps both developers but also functionality and efficiency of the project.
