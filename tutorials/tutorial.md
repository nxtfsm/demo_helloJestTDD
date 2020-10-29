# Tutorial -- Topic Intro
Good lawyers, bad lawyers, and even people who have seen even a little bit of tv about lawyers know that the very first rule of Lawyer Club goes like this: "Don't ask a question if you don't already know the answer."


Programmers, on the other hand, are all about that diving into the unknown / 'I wonder what happens if I push this button' life. Granted, we're not always great at "could've doesn't mean should've", but it isn't like the lawyers at theFacebook etc. do such a great job of slow-walking on that one either. But like just about everything else, this stuff works better when we find the common ground, and some more experienced developers will probably disagree (and I hope they do, because then I can learn from their experience), at least to my thoroughly-warped-by-the-humanities way of thinking, automated testing and Test Driven Development (TDD) made a lot more sense once I started thinking like the second rule of Lawyer Club:

"Don't ask a question if you don't already know the answer."


In a nutshell TDD is this: *first* you write code that checks if the code you're going to write does what you want it to do. Take a quick look at a test in its simplest form, readable even if this is the very first time you're looking at Javascript:


True or False...

```
expect(1+2).toEqual(3)
```

No big deal, and to be fair, that's a calculation that mechanical computers were solving before the electric lightbulb was a thing. So even though you *could* write and test the following function:

```
function add(a, b) { return a + b }
```

```
expect( add(1, 2) ).toEqual(3)
```


you could also write...


```
function stepAdd(number, step) { return number + (number + step) }
```

and

```
expect( stepAdd(1, 2) ).toEqual(4)
```




Still. This is counting on your fingers stuff, so why do the extra work? After all, good programmers are *supposed* to be lazy. But it's lazy on our terms, and since I'm itching to stick in another movie reference: "You keep using that word. I do not think it means what you think it means."


Programatically lazy is working smarter not harder, doing a little bit of thinking-work to get out of doing the stuff that's just mind-numbing repetition.  Programmatically lazy looks something like this:

```
expect( lookupCapitalCity('Micronesia') ).toBe('Palikir')
```


...and then writing a function that automates the steps folks who don't know will take to know if that test is true or false, so that the function will work no matter what country we throw at that:

```
    function lookupCapitalCity(someCountry) {

    // look up someCountry on wikipedia or google maps or wherever

    // then somehow figure out what the capital city is

    // send that answer back out to whoever called this function

  }
```


...and sure, figuring out a pattern and automating that does take some thought. But this would also pass the test:


```
function lookupCapitalCity(someCountry) {

    return 'Palikir'

  }
```

...even if the test were:

```
    expect( lookupCapitalCity('Palau') ).toBe('Palikir')
```


...you could rewrite the function to be:

```
    function lookupCapitalCity(someCountry) {

    if (someCountry === 'Micronesia') {

      return 'Palikir'

    } else {

      return 'Where's that?'

    }

  }
```
...and maybe you could extend that by writing:
```
  function lookupCapitalCity(someCountry) {

    if (someCountry === 'Micronesia') {

      return 'Palikir'

    }

    if (someCountry === 'Philippines') {

      return 'Manilla'

    }

    else {

      return 'Where's that?'

    }

  }
```

...but we'd look like we didn't know any better when these two tests return false:

```
expect( lookupCapitalCity('Marshall Islands') ).toBe('Majuro')
```

```
expect( lookupCapitalCity('FSM') ).toBe('Palikir')
```

...and as programmers, we really wouldn't know any better if we wasted our time googling and then writing out 190+ 'if'/'else' handlers to cover each country in the world. To put it nicely, that would be... tedious.

Really what we're looking for is something that can go through a whole list of countries, and the different ways they can be abbreviated, and match up the results of their capitals (and probably think our way around more than a few edge conditions of spelling and world politics). In essence that's a database query and a different topic for another time, and following it too far here would make this example start to get both pointlessly simple and surprisingly complicated. Besides, relatively speaking, national capitals don't change all that often and if your App really depends on having access to that dataset, there are simpler ways to handle it than working out some kind of function to call wikipedia or google maps.


But what about a function that also returns the current weather in the capital city?


It's like setting up hurdles before a track meet and then starting the race, instead of telling the runners "Ok, when the gun goes off, start running, and then every 50 feet or so, stride up a little more than a yard, and then afterwards we'll watch the replay to see how things turned out." Automated testing puts the hurdles out first, and then goes a step further and hangs a gong on each one to go off the moment a runner doesn't clear it. And also takes a picture to (prove || dispute) it after the race. It says "each pice of my App must clear its matching test, and if it doesn't, my App will tell me why not."

There are tons of benefits to doing it, but the same can be said for exercising regularly and eating healthy -- the best sales pitch for automated testing, I think, is that even though it *seems* like extra work, it's actually the opposite. English teachers say the same thing about writing an outline before you write an essay (and they're correct), but this is way beyond that. TDD works like going into an exam with the answer to the question written beforehand, and then being able to write whatever question will answer it.

1648? 206 * 8. The year the Treaty of Westphalia was signed. 1647 + 1.

42? *.

That's probably stretching it, and of course there are limits and some ways are better than others. But it definitely takes the hassle out of having to figure out what you need to do next when you're writing your code. You think about writing your tests, breaking a big abstract problem into manageable and specifically defined chunks, so that you can be lazy and work smarter-not-harder when you need to write the actual implementation code that solves the problem.

That leads me back to the lawyer example from the start of this big top-level intro to the topic of Automated Testing and Test Driven Development: the winning litigators don't have to wonder about what the witness on the stand will answer, because they've done their work ahead of time. That frees them up to use their time in court to get exactly the testimony they want said in exactly the order that they want it heard by the judge and jury.

...and when a witness tries to come up with some answer that doesn't match the story, knowing the expected answers inside and out beforehand sets a good lawyer up to jump on any mistake. That's what TDD does for programmers.

In the next module I'll lay off the big picture metaphors and explanations and go straight into writing code and building out the App we're going to complete over the rest of this project.
