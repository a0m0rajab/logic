"use client";
import React from "react"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  const [lang , setLang] = useState("en")
  // define the cards object

  // create an object to fill the card
  const cards: Record<string, any> = {
    en: [
    {
      name: "anchoring",
      title: "anchoring",
      slug: "anchoring",
      head: "The first thing you judge influences your judgment of all that follows.",
      first:"The first thing you judge influences your judgment of all that follows.",
      description:
        "Human minds are associative in nature, so the order in which we receive information helps determine the course of our judgments and perceptions. For instance, the first price offered for a used car sets an ‘anchor’ price which will influence how reasonable or unreasonable a counter-offer might seem. Even if we feel like an initial price is far too high, it can make a slightly less-than-reasonable offer seem entirely reasonable in contrast to the anchor price.",
      example:
        "Be especially mindful of this bias during financial negotiations such as houses, cars, and salaries. The initial price offered has proven to have a significant effect.",
      pageTitle: "Your bias is anchoring",
      exampleText:
        "Be especially mindful of this bias during financial negotiations such as houses, cars, and salaries. The initial price offered has proven to have a significant effect.",
      meta: {
        seo: {
          title: "Your bias is anchoring",
          description:
            "The first thing you judge influences your judgment of all that follows. Be especially mindful of this bias during financial negotiations such as houses, cars, and salaries. The initial price offered has proven to have a significant effect.",
        },
        og: {
          "og:title": "Your bias is anchoring",
          "og:description":
            "Be especially mindful of this bias during financial negotiations such as houses, cars, and salaries. The initial price offered has proven to have a significant effect.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/004/original/YourBiasIs_01_anchoring.jpg",
          "og:image:width": 1201,
          "og:image:height": 630,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Anchoring" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "the-sunk-cost-fallacy",
      title: "the sunk cost fallacy",
      slug: "the-sunk-cost-fallacy",
      head: "You irrationally cling to things that have already cost you something.",
      first:
        "You irrationally cling to things that have already cost you something.",
      description:
        "When we've invested our time, money, or emotion into something, it hurts us to let it go. This aversion to pain can distort our better judgment and cause us to make unwise investments. A sunk cost means that we can't recover it, so it's rational to disregard the cost when evaluating. For instance, if you've spent money on a meal but you only feel like eating half of it, it's irrational to continue to stuff your face just because 'you've already paid for it'; especially considering the fact that you're wasting actual time doing so.",
      example:
        "To regain objectivity, ask yourself: had I not already invested something, would I still do so now? What would I counsel a friend to do if they were in the same situation?",
      pageTitle: "Your bias is the sunk cost fallacy",
      exampleText:
        "To regain objectivity, ask yourself: had I not already invested something, would I still do so now? What would I counsel a friend to do if they were in the same situation?",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="http://amzn.to/2erM9nn" target="_blank">You Are Now Less Dumb</a>\n                    <span class="separator">|</span>\n                    <a href="https://en.wikipedia.org/wiki/Sunk_cost" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "the-availability-heuristic",
      title: "the availability heuristic",
      slug: "the-availability-heuristic",
      head: "Your judgments are influenced by what springs most easily to mind.",
      first:
        "Your judgments are influenced by what springs most easily to mind.",
      description:
        "How recent, emotionally powerful, or unusual your memories are can make them seem more relevant. This, in turn, can cause you to apply them too readily. For instance, when we see news reports about homicides, child abductions, and other terrible crimes it can make us believe that these events are much more common and threatening to us than is actually the case.",
      example:
        "Try to gain different perspectives and relevant statistical information rather than relying purely on first judgments and emotive influences.",
      pageTitle: "Your bias is the availability heuristic",
      exampleText:
        "Try to gain different perspectives and relevant statistical information rather than relying purely on first judgments and emotive influences.",
      meta: {
        seo: {
          title: "Your bias is the availability heuristic",
          description:
            "Your judgments are influenced by what springs most easily to mind. How recent, emotionally powerful, or unusual your memories are can make them seem more relevant. This, in turn, can cause you to apply them too readily. For instance, when we see news reports about homicides, child abductions, and other terrible crimes it can make us believe that these events are much more common and threatening to us than is actually the case.",
        },
        og: {
          "og:title": "Your bias is the availability heuristic",
          "og:description":
            "How recent, emotionally powerful, or unusual your memories are can make them seem more relevant. This, in turn, can cause you to apply them too readily. For instance, when we see news reports about homicides, child abductions, and other terrible crimes it can make us believe that these events are much more common and threatening to us than is actually the case.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/017/original/YourBiasIsPreview copy 2.jpg",
          "og:image:width": 1201,
          "og:image:height": 630,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n                    <span class="separator">|</span>\n                    <a href="https://en.wikipedia.org/wiki/Availability_heuristic" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2vHa0Tx" target="_blank">Thinking, Fast and Slow</a>\n            ',
    },
    {
      name: "the-curse-of-knowledge",
      title: "the curse of knowledge",
      slug: "the-curse-of-knowledge",
      head: "Once you understand something you presume it to be obvious to everyone.",
      first:
        "Once you understand something you presume it to be obvious to everyone.",
      description:
        "Things makes sense once they make sense, so it can be hard to remember why they didn't. We build complex networks of understanding and forget how intricate the path to our available knowledge really is. This bias is closely related to the hindsight bias wherein you will tend to believe that an event was predictable all along once it has occurred. We have difficulty reconstructing our own prior mental states of confusion and ignorance once we have clear knowledge.",
      example:
        "When teaching someone something new, go slow and explain like they're ten years old (without being patronizing). Repeat key points and facilitate active practice to help embed knowledge.",
      pageTitle: "Your bias is the curse of knowledge",
      exampleText:
        "When teaching someone something new, go slow and explain like they're ten years old (without being patronizing). Repeat key points and facilitate active practice to help embed knowledge.",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Curse_of_knowledge" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "confirmation-bias",
      title: "confirmation bias",
      slug: "confirmation-bias",
      head: "You favor things that confirm your existing beliefs.",
      first: "You favor things that confirm your existing beliefs.",
      description:
        "We are primed to see and agree with ideas that fit our preconceptions, and to ignore and dismiss information that conflicts with them. You could say that this is the mother of all biases, as it affects so much of our thinking through motivated reasoning. To help counteract its influence we ought to presume ourselves wrong until proven right.",
      example:
        'Think of your ideas and beliefs as software you\'re actively trying to find problems with rather than things to be defended. "The first principle is that you must not fool yourself – and you are the easiest person to fool." \u0003- Richard Feynman',
      pageTitle: "Your bias is confirmation bias",
      exampleText:
        'Think of your ideas and beliefs as software you\'re actively trying to find problems with rather than things to be defended. "The first principle is that you must not fool yourself – and you are the easiest person to fool." \u0003- Richard Feynman',
      meta: {
        seo: {
          title: "Your bias is confirmation bias",
          description:
            "You look for ways to justify your existing beliefs. We automatically find ways to make new information fit our existing narratives and preconceptions, and to dismiss information that does not. You could say that this is the mother of all biases, as it affects so much of our thinking through motivated reasoning. To help counteract its influence we ought to presume ourselves wrong until proven right.",
        },
        og: {
          "og:title": "Your bias is confirmation bias",
          "og:description":
            "You look for ways to justify your existing beliefs. We automatically find ways to make new information fit our existing narratives and preconceptions, and to dismiss information that does not.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/006/original/YourBiasIsPreview copy 4.jpg",
          "og:image:width": 1201,
          "og:image:height": 630,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Confirmation_bias" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2vHa0Tx" target="_blank">Thinking, Fast and Slow</a>\n            ',
    },
    {
      name: "the-dunning-kruger-effect",
      title: "the dunning-kruger effect",
      slug: "the-dunning-kruger-effect",
      head: "The more you know, the less confident you're likely to be.",
      first: "The more you know, the less confident you're likely to be.",
      description:
        "Because experts know just how much they don't know, they tend to underestimate their ability; but it's easy to be over-confident when you have only a simple idea of how things are. Try not to mistake the cautiousness of experts as a lack of understanding, nor to give much credence to lay-people who appear confident but have only superficial knowledge.",
      example:
        "“The whole problem with the world is that fools and fanatics are so certain of themselves, yet wiser people so full of doubts.”\u0003- Bertrand Russell",
      pageTitle: "Your bias is the dunning-kruger effect",
      exampleText:
        "“The whole problem with the world is that fools and fanatics are so certain of themselves, yet wiser people so full of doubts.”\u0003- Bertrand Russell",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "belief-bias",
      title: "belief bias",
      slug: "belief-bias",
      head: "If a conclusion supports your existing beliefs, you'll rationalize anything that supports it.",
      first:
        "If a conclusion supports your existing beliefs, you'll rationalize anything that supports it.",
      description:
        "It's difficult for us to set aside our existing beliefs to consider the true merits of an argument. In practice this means that our ideas become impervious to criticism, and are perpetually reinforced. Instead of thinking about our beliefs in terms of 'true or false' it's probably better to think of them in terms of probability. For example we might assign a 95%+ chance that thinking in terms of probability will help us think better, and a less than 1% chance that our existing beliefs have no room for any doubt. Thinking probabalistically forces us to evaluate more rationally.",
      example:
        "A useful thing to ask is 'when and how did I get this belief?' \u0003We tend to automatically defend our ideas without ever really\u0003 questioning them.",
      pageTitle: "Your bias is belief bias",
      exampleText:
        "A useful thing to ask is 'when and how did I get this belief?' \u0003We tend to automatically defend our ideas without ever really\u0003 questioning them.",
      meta: {
        seo: {
          title: "Your bias is belief bias",
          description:
            "If a conclusion supports your existing beliefs, you'll rationalize anything that supports it. A useful thing to ask is 'when and how did I get this belief?' \u0003We tend to automatically defend our ideas without ever really\u0003 questioning them.",
        },
        og: {
          "og:title": "Your bias is belief bias",
          "og:description":
            "A useful thing to ask is 'when and how did I get this belief?' \u0003We tend to automatically defend our ideas without ever really\u0003 questioning them.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/005/original/YourBiasIsPreview copy 6.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Belief_bias" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="Thinking, Fast and Slow" target="_blank">http://amzn.to/2vHa0Tx</a>\n            ',
    },
    {
      name: "self-serving-bias",
      title: "self-serving bias",
      slug: "self-serving-bias",
      head: "You believe your failures are due to external factors, yet you're responsible for your successes.",
      first:
        "You believe your failures are due to external factors, yet you're responsible for your successes.",
      description:
        "Many of us enjoy unearned privileges, luck and advantages that others do not. It's easy to tell ourselves that we deserve these things, whilst blaming circumstance when things don't go our way. Our desire to protect and exalt our own egos is a powerful force in our psychology. Fostering humility can help countermand this tendency, whilst also making us nicer humans.",
      example:
        "When judging others, be mindful of how this bias interacts \u0003with the just-world hypothesis, fundamental attribution error, \u0003and the in-group bias.",
      pageTitle: "Your bias is self-serving bias",
      exampleText:
        "When judging others, be mindful of how this bias interacts \u0003with the just-world hypothesis, fundamental attribution error, \u0003and the in-group bias.",
      meta: {
        seo: {
          title: "Your bias is self-serving bias",
          description:
            "You believe your failures are due to external factors, yet you're responsible for your successes. Many of us enjoy unearned privileges, luck and advantages that others do not. It's easy to tell ourselves that we deserve these things, whilst blaming circumstance when things don't go our way. ",
        },
        og: {
          "og:title": "Your bias is self-serving bias",
          "og:description":
            "Many of us enjoy unearned privileges, luck and advantages that others do not. It's easy to tell ourselves that we deserve these things, whilst blaming circumstance when things don't go our way. ",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/016/original/YourBiasIsPreview copy 7.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Self-serving_bias" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2vHa0Tx" target="_blank">Thinking, Fast and Slow</a>\n            ',
    },
    {
      name: "the-backfire-effect",
      title: "the backfire effect",
      slug: "the-backfire-effect",
      head: "When some aspect of your core beliefs is challenged, it can cause you to believe even more strongly.",
      first:
        "When some aspect of your core beliefs is challenged, it can cause you to believe even more strongly.",
      description:
        "We can experience being wrong about some ideas as an attack upon our very selves, or our tribal identity. This can lead to motivated reasoning which causes a reinforcement of beliefs, despite disconfirming evidence. Recent research shows that the backfire effect certainly doesn't happen all the time. Most people will accept a correction relating to specific facts, however the backfire effect may reinforce a related or 'parent' belief as people attempt to reconcile a new narrative in their understanding.",
      example:
        "“It ain’t what you don’t know that gets you into trouble. It’s what you know for sure that just ain’t so.” - Mark Twain",
      pageTitle: "Your bias is the backfire effect",
      exampleText:
        "“It ain’t what you don’t know that gets you into trouble. It’s what you know for sure that just ain’t so.” - Mark Twain",
      meta: {
        seo: {
          title: "Your bias is the backfire effect",
          description:
            "When some aspect of your core beliefs is challenged, it can cause you to believe even more strongly. We can experience being wrong about some ideas as an attack upon our very selves, or our tribal identity. This can lead to motivated reasoning which causes a reinforcement of beliefs, despite disconfirming evidence.",
        },
        og: {
          "og:title": "Your bias is the backfire effect",
          "og:description":
            "We can experience being wrong about some ideas as an attack upon our very selves, or our tribal identity. This can lead to motivated reasoning which causes a reinforcement of beliefs, despite disconfirming evidence.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/018/original/YourBiasIsPreview copy 8.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="http://amzn.to/2erM9nn" target="_blank">You Are Now Less Dumb</a>\n            ',
    },
    {
      name: "the-barnum-effect",
      title: "the barnum effect",
      slug: "the-barnum-effect",
      head: "You see personal specifics in vague statements by filling in the gaps.",
      first:
        "You see personal specifics in vague statements by filling in the gaps.",
      description:
        "Because our minds are given to making connections, it's easy for us \u0003to take nebulous statements and find ways to interpret them so that they seem specific and personal. The combination of our egos wanting validation with our strong inclination to see patterns and connections means that when someone is telling us a story about ourselves, we look to find the signal and ignore all the noise.",
      example:
        "Psychics, astrologers and others use this bias to make it seem like they're telling you something relevant. Consider how things might be interpreted to apply to anyone, not just you.",
      pageTitle: "Your bias is the barnum effect",
      exampleText:
        "Psychics, astrologers and others use this bias to make it seem like they're telling you something relevant. Consider how things might be interpreted to apply to anyone, not just you.",
      meta: {
        seo: {
          title: "Your bias is the barnum effect",
          description:
            "You see personal specifics in vague statements by filling in the gaps. Because our minds are given to making connections, it's easy for us \u0003to take nebulous statements and find ways to interpret them so that they seem specific and personal. Psychics, astrologers and others use this bias to make it seem like they're telling you something relevant. Consider how things might be interpreted to apply to anyone, not just you.",
        },
        og: {
          "og:title": "Your bias is the barnum effect",
          "og:description":
            "Because our minds are given to making connections, it's easy for us \u0003to take nebulous statements and find ways to interpret them so that they seem specific and personal. Psychics, astrologers and others use this bias to make it seem like they're telling you something relevant. Consider how things might be interpreted to apply to anyone, not just you.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/019/original/YourBiasIsPreview copy 9.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Barnum_effect" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "groupthink",
      title: "groupthink",
      slug: "groupthink",
      head: "You let the social dynamics of a group situation override the best outcomes.",
      first:
        "You let the social dynamics of a group situation override the best outcomes.",
      description:
        "Dissent can be uncomfortable and dangerous to one's social standing, and so often the most confident or first voice will determine \u0003group decisions. Because of the Dunning-Kruger effect, the most confident voices are also often the most ignorant.",
      example:
        "Rather than openly contradicting others, seek to facilitate objective means of evaluation and critical thinking practices \u0003as a group activity.",
      pageTitle: "Your bias is groupthink",
      exampleText:
        "Rather than openly contradicting others, seek to facilitate objective means of evaluation and critical thinking practices \u0003as a group activity.",
      meta: {
        seo: {
          title: "Your bias is groupthink",
          description:
            "You let the social dynamics of a group situation override the best outcomes. Dissent can be uncomfortable and dangerous to one's social standing, and so often the most confident or first voice will determine \u0003group decisions.",
        },
        og: {
          "og:title": "Your bias is groupthink",
          "og:description":
            "Dissent can be uncomfortable and dangerous to one's social standing, and so often the most confident or first voice will determine \u0003group decisions.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/009/original/YourBiasIsPreview copy 10.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Groupthink" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "negativity-bias",
      title: "negativity bias",
      slug: "negativity-bias",
      head: "You allow negative things to disproportionately influence your thinking.",
      first:
        "You allow negative things to disproportionately influence your thinking.",
      description:
        "The pain of loss and hurt are felt more keenly and persistently than the fleeting gratification of pleasant things. We are primed for survival, and our aversion to pain can distort our judgment for a modern world. In an evolutionary context it makes sense for us to be heavily biased to avoid threats, but because this bias affects our judgments in other ways it means we aren't giving enough weight to the positives.",
      example:
        "Pro-and-con lists, as well as thinking in terms of probabilities, \u0003can help you evaluate things more objectively than relying on \u0003a cognitive impression.",
      pageTitle: "Your bias is negativity bias",
      exampleText:
        "Pro-and-con lists, as well as thinking in terms of probabilities, \u0003can help you evaluate things more objectively than relying on \u0003a cognitive impression.",
      meta: {
        seo: {
          title: "Your bias is negativity bias",
          description:
            "You allow negative things to disproportionately influence your thinking. The pain of loss and hurt are felt more keenly and persistently than the fleeting gratification of pleasant things. We are primed for survival, and our aversion to pain can distort our judgment for a modern world. In an evolutionary context it makes sense for us to be heavily biased to avoid threats, but because this bias affects our judgments in other ways it means we aren't giving enough weight to the positives.",
        },
        og: {
          "og:title": "Your bias is negativity bias",
          "og:description":
            "The pain of loss and hurt are felt more keenly and persistently than the fleeting gratification of pleasant things. We are primed for survival, and our aversion to pain can distort our judgment for a modern world. In an evolutionary context it makes sense for us to be heavily biased to avoid threats, but because this bias affects our judgments in other ways it means we aren't giving enough weight to the positives.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/012/original/YourBiasIsPreview copy 11.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Negativity_bias" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "declinism",
      title: "declinism",
      slug: "declinism",
      head: "You remember the past as better than it was, and expect the future to be worse than it will likely be.",
      first:
        "You remember the past as better than it was, and expect the future to be worse than it will likely be.",
      description:
        "Despite living in the most peaceful and prosperous time in history, many people believe things are getting worse. The 24 hour news cycle, with its reporting of overtly negative and violent events, may account for some of this effect. We can also look to the generally optimistic view of the future in the early 20th century as being shifted to a dystopian and apocalyptic expectation after the world wars, and during the cold war. The greatest tragedy of this bias may be that our collective expectation of decline may contribute to a real-world self-fulfilling prophecy.",
      example:
        "Instead of relying on nostalgic impressions of how great things used to be, use measurable metrics such as life expectancy, levels of crime and violence, and prosperity statistics.",
      pageTitle: "Your bias is declinism",
      exampleText:
        "Instead of relying on nostalgic impressions of how great things used to be, use measurable metrics such as life expectancy, levels of crime and violence, and prosperity statistics.",
      meta: {
        seo: {
          title: "Your bias is declinism",
          description:
            "You remember the past as better than it was, and expect the future to be worse than it will likely be. Instead of relying on nostalgic impressions of how great things used to be, use measurable metrics such as life expectancy, levels of crime and violence, and prosperity statistics.\r\n",
        },
        og: {
          "og:title": "Your bias is declinism",
          "og:description":
            "Instead of relying on nostalgic impressions of how great things used to be, use measurable metrics such as life expectancy, levels of crime and violence, and prosperity statistics.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/007/original/YourBiasIsPreview copy 12.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://youtu.be/jbkSRLYSojo" target="_blank">200 Countries, 200 years, 4 Minutes - The Joy of Stats (YouTube)</a>\n            ',
    },
    {
      name: "the-framing-effect",
      title: "the framing effect",
      slug: "the-framing-effect",
      head: "You allow yourself to be unduly influenced by context and delivery.",
      first:
        "You allow yourself to be unduly influenced by context and delivery.",
      description:
        "We all like to think that we think independently, but the truth is that all of us are, in fact, influenced by delivery, framing and subtle cues. \u0003This is why the ad industry is a thing, despite almost everyone believing they’re not affected by advertising messages. The phrasing of how a question is posed, such as for a proposed law being voted on, has been shown to have a significant effect on the outcome.",
      example:
        "Only when we have the intellectual humility to accept the fact that we can be manipulated, can we hope to limit how much we are. Try to be mindful of how things are being put to you.",
      pageTitle: "Your bias is the framing effect",
      exampleText:
        "Only when we have the intellectual humility to accept the fact that we can be manipulated, can we hope to limit how much we are. Try to be mindful of how things are being put to you.",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Framing_effect_(psychology)" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2vHa0Tx" target="_blank">Thinking, Fast and Slow</a>\n            ',
    },
    {
      name: "fundamental-attribution-error",
      title: "fundamental attribution error",
      slug: "fundamental-attribution-error",
      head: "You judge others on their character, but yourself on the situation.",
      first:
        "You judge others on their character, but yourself on the situation.",
      description:
        "If you haven’t had a good night’s sleep, you know why you’re being a bit slow; but if you observe someone else being slow you don’t have such knowledge and so you might presume them to just be a slow person. Because of this disparity in knowledge we often overemphasize the influence of circumstance for our own failings, as well as underestimating circumstantial factors to explain other people's problems.",
      example:
        "It's not only kind to view others' situations with charity, it's more objective too. Be mindful to also err on the side of taking personal responsibility rather than justifying and blaming.",
      pageTitle: "Your bias is fundamental attribution error",
      exampleText:
        "It's not only kind to view others' situations with charity, it's more objective too. Be mindful to also err on the side of taking personal responsibility rather than justifying and blaming.",
      meta: {
        seo: {
          title: "your bias is the fundamental attribution error",
          description:
            "You judge others on their character, but yourself on the situation. If you haven’t had a good night’s sleep, you know why you’re being a bit slow; but if you observe someone else being slow you don’t have such knowledge and so you might presume them to just be a slow person. ",
        },
        og: {
          "og:title": "your bias is the fundamental attribution error",
          "og:description":
            "If you haven’t had a good night’s sleep, you know why you’re being a bit slow; but if you observe someone else being slow you don’t have such knowledge and so you might presume them to just be a slow person. ",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/008/original/YourBiasIsPreview copy 14.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Fundamental_attribution_error" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "the-halo-effect",
      title: "the halo effect",
      slug: "the-halo-effect",
      head: "How much you like someone, or how attractive they are, influences your other judgments of them.",
      first:
        "How much you like someone, or how attractive they are, influences your other judgments of them.",
      description:
        "Our judgments are associative and automatic, and so if we want to be objective we need to consciously control for irrelevant influences. This is especially important in a professional setting. Things like attractiveness can unduly influence issues as important as a jury deciding someone's guilt or innocence. If someone is successful or fails in one area, this can also unfairly color our expectations of them in another area.",
      example:
        "If you notice that you're giving consistently high or low marks across the board, it's worth considering that your judgment may be suffering from the halo effect.",
      pageTitle: "Your bias is the halo effect",
      exampleText:
        "If you notice that you're giving consistently high or low marks across the board, it's worth considering that your judgment may be suffering from the halo effect.",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Halo_effect" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2erM9nn" target="_blank">You Are Now Less Dumb</a>\n            ',
    },
    {
      name: "optimism-bias",
      title: "optimism bias",
      slug: "optimism-bias",
      head: "You overestimate the likelihood of positive outcomes.",
      first: "You overestimate the likelihood of positive outcomes.",
      description:
        "There can be benefits to a positive attitude, but it's unwise to allow such an attitude to adversely affect our ability to make rational judgments (they're not mutually exclusive). Wishful thinking can be a tragic irony insofar as it can create more negative outcomes, such as in the case of problem gambling.",
      example:
        "If you make rational, realistic judgments you'll have a lot more to \u0003feel positive about.",
      pageTitle: "Your bias is optimism bias",
      exampleText:
        "If you make rational, realistic judgments you'll have a lot more to \u0003feel positive about.",
      meta: {
        seo: {
          title: "Your bias is optimism bias",
          description:
            "You overestimate the likelihood of positive outcomes. There can be benefits to a positive attitude, but it's unwise to allow such an attitude to adversely affect our ability to make rational judgments (they're not mutually exclusive). Wishful thinking can be a tragic irony insofar as it can create more negative outcomes, such as in the case of problem gambling.",
        },
        og: {
          "og:title": "Your bias is optimism bias",
          "og:description":
            "There can be benefits to a positive attitude, but it's unwise to allow such an attitude to adversely affect our ability to make rational judgments (they're not mutually exclusive). Wishful thinking can be a tragic irony insofar as it can create more negative outcomes, such as in the case of problem gambling.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/013/original/YourBiasIsPreview copy 16.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Optimism_bias" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "pessimism-bias",
      title: "pessimism bias",
      slug: "pessimism-bias",
      head: "You overestimate the likelihood of negative outcomes.",
      first: "You overestimate the likelihood of negative outcomes.",
      description:
        "Pessimism is often a defense mechanism against disappointment, or it can be the result of depression and anxiety disorders. Pessimists often justify their attitude by saying that they'll either be vindicated or pleasantly surprised, however a pessimistic attitude may also limit potential positive outcomes. It should also be noted that pessimism is something very different to skepticism: the latter is a rational approach that seeks to remain impartial, while the former is an expectation of bad outcomes.",
      example:
        "Perhaps the worst aspect of pessimism is that even if something good happens, you'll probably feel pessimistic about it anyway.",
      pageTitle: "Your bias is pessimism bias",
      exampleText:
        "Perhaps the worst aspect of pessimism is that even if something good happens, you'll probably feel pessimistic about it anyway.",
      meta: {
        seo: {
          title: "Your bias is pessimism bias",
          description:
            "You overestimate the likelihood of negative outcomes. Pessimism is often a defense mechanism against disappointment, or it can be the result of depression and anxiety disorders.",
        },
        og: {
          "og:title": "Your bias is pessimism bias",
          "og:description":
            "Pessimism is often a defense mechanism against disappointment, or it can be the result of depression and anxiety disorders.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/014/original/YourBiasIsPreview copy 17.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading: "",
    },
    {
      name: "just-world-hypothesis",
      title: "just-world hypothesis",
      slug: "just-world-hypothesis",
      head: "Your preference for justice makes you presume it exists.",
      first: "Your preference for justice makes you presume it exists.",
      description:
        "A world in which people don't always get what they deserve, hard work doesn't always pay off, and injustice happens is an uncomfortable one that threatens our preferred narrative. However, it is also the reality. This bias is often manifest in ideas such as 'what goes around comes around' or an expectation of 'karmic balance', and can also lead to blaming victims of crime and circumstance.",
      example:
        "A more just world requires understanding rather than blame. \u0003Remember that everyone has their own life story, we’re all fallible, and bad things happen to good people.",
      pageTitle: "Your bias is just-world hypothesis",
      exampleText:
        "A more just world requires understanding rather than blame. \u0003Remember that everyone has their own life story, we’re all fallible, and bad things happen to good people.",
      meta: {
        seo: {
          title: "Your bias is the just world hypothesis",
          description:
            "Your preference for justice makes you presume it exists. A world in which people don't always get what they deserve, hard work doesn't always pay off, and injustice happens is an uncomfortable one that threatens our preferred narrative. However, it is also the reality. This bias is often manifest in ideas such as 'what goes around comes around' or an expectation of 'karmic balance', and can also lead to blaming victims of crime and circumstance.",
        },
        og: {
          "og:title": "Your bias is the just world hypothesis",
          "og:description":
            "A world in which people don't always get what they deserve, hard work doesn't always pay off, and injustice happens is an uncomfortable one that threatens our preferred narrative. However, it is also the reality. This bias is often manifest in ideas such as 'what goes around comes around' or an expectation of 'karmic balance', and can also lead to blaming victims of crime and circumstance.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/011/original/YourBiasIsPreview copy 18.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Just-world_hypothesis" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "in-group-bias",
      title: "in-group bias",
      slug: "in-group-bias",
      head: "You unfairly favor those who belong to your group.",
      first: "You unfairly favor those who belong to your group.",
      description:
        "We presume that we're fair and impartial, but the truth is that \u0003we automatically favor those who are most like us, or belong to \u0003our groups. This blind tribalism has evolved to strengthen social cohesion, however in a modern and multicultural world it can have the opposite effect.",
      example:
        "Try to imagine yourself in the position of those in out-groups; whilst also attempting to be dispassionate when judging those who belong to your in-groups.",
      pageTitle: "Your bias is in-group bias",
      exampleText:
        "Try to imagine yourself in the position of those in out-groups; whilst also attempting to be dispassionate when judging those who belong to your in-groups.",
      meta: {
        seo: {
          title: "Your bias is in-group bias",
          description:
            "You unfairly favor those who belong to your group. We presume that we're fair and impartial, but the truth is that \u0003we automatically favor those who are most like us, or belong to \u0003our groups. This blind tribalism has evolved to strengthen social cohesion, however in a modern and multicultural world it can have the opposite effect.",
        },
        og: {
          "og:title": "Your bias is in-group bias",
          "og:description":
            "We presume that we're fair and impartial, but the truth is that \u0003we automatically favor those who are most like us, or belong to \u0003our groups. This blind tribalism has evolved to strengthen social cohesion, however in a modern and multicultural world it can have the opposite effect.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/010/original/YourBiasIsPreview copy 19.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/In-group_favoritism" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "the-placebo-effect",
      title: "the placebo effect",
      slug: "the-placebo-effect",
      head: "If you believe you're taking medicine it can sometimes 'work' even if it's fake.",
      first:
        "If you believe you're taking medicine it can sometimes 'work' even if it's fake.",
      description:
        "The placebo effect can work for stuff that our mind influences (such as pain) but not so much for things like viruses or broken bones. Things like the size and color of pills can have an influence on how strong the effect is and may even result in real physiological outcomes. We can also falsely attribute getting better to an inert substance simply because our immune system has fought off an infection i.e. we would have recovered in the same amount of time anyway.",
      example:
        "Homeopathy, acupuncture, and many other forms of natural 'medicine' have been proven to be no more effective than placebo. Keep a healthy body and bank balance by using evidence-based medicine from a qualified doctor.",
      pageTitle: "Your bias is the placebo effect",
      exampleText:
        "Homeopathy, acupuncture, and many other forms of natural 'medicine' have been proven to be no more effective than placebo. Keep a healthy body and bank balance by using evidence-based medicine from a qualified doctor.",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Placebo" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "the-bystander-effect",
      title: "the bystander effect",
      slug: "the-bystander-effect",
      head: "You presume someone else is going to do something in an emergency situation.",
      first:
        "You presume someone else is going to do something in an emergency situation.",
      description:
        "When something terrible is happening in a public setting we can experience a kind of shock and mental paralysis that distracts us from a sense of personal responsibility. The problem is that everyone can experience this sense of deindividuation in a crowd. This same sense of losing our sense of self in a crowd has been linked to violent and anti-social behaviors. Remaining self-aware  requires some amount of effortful reflection in group situations.",
      example:
        "If there's an emergency situation, presume to be the one who will help or call for help. Be the change you want to see in the world.",
      pageTitle: "Your bias is the bystander effect",
      exampleText:
        "If there's an emergency situation, presume to be the one who will help or call for help. Be the change you want to see in the world.",
      meta: {
        seo: {
          title: "Your bias is the bystander effect",
          description:
            "You presume someone else is going to do something in an emergency situation. When something terrible is happening in a public setting we can experience a kind of shock and mental paralysis that distracts us from a sense of personal responsibility. If there's an emergency situation, presume to be the one who will help or call for help.",
        },
        og: {
          "og:title": "Your bias is the bystander effect",
          "og:description":
            "When something terrible is happening in a public setting we can experience a kind of shock and mental paralysis that distracts us from a sense of personal responsibility. If there's an emergency situation, presume to be the one who will help or call for help.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/020/original/YourBiasIsPreview copy 21.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Bystander_effect" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "reactance",
      title: "reactance",
      slug: "reactance",
      head: "You'd rather do the opposite of what someone is trying to make you do.",
      first:
        "You'd rather do the opposite of what someone is trying to make you do.",
      description:
        "When we feel our liberty is being constrained, our inclination is to resist, however in doing so we can over-compensate. While blind conformity is far from an ideal way to approach things, neither is being a knee-jerk contrarian.",
      example:
        "Be careful not to lose objectivity when someone is being coercive/manipulative, or trying to force you do something. \u0003Wisdom springs from reflection, folly from reaction.",
      pageTitle: "Your bias is reactance",
      exampleText:
        "Be careful not to lose objectivity when someone is being coercive/manipulative, or trying to force you do something. \u0003Wisdom springs from reflection, folly from reaction.",
      meta: {
        seo: {
          title: "Your bias is reactance",
          description:
            "You'd rather do the opposite of what someone is trying to make you do. When we feel our liberty is being constrained, our inclination is to resist, however in doing so we can over-compensate. While blind conformity is far from an ideal way to approach things, neither is being a knee-jerk contrarian.",
        },
        og: {
          "og:title": "Your bias is reactance",
          "og:description":
            "When we feel our liberty is being constrained, our inclination is to resist, however in doing so we can over-compensate. While blind conformity is far from an ideal way to approach things, neither is being a knee-jerk contrarian.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/015/original/YourBiasIsPreview copy 22.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Reactance_(psychology)" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "the-spotlight-effect",
      title: "the spotlight effect",
      slug: "the-spotlight-effect",
      head: "You overestimate how much people notice how you look and act.",
      first: "You overestimate how much people notice how you look and act.",
      description:
        "Most people are much more concerned about themselves than they are about you. Absent overt prejudices, people generally want to like and get along with you as it gives them validation too. It's healthy to remember that although we're the main character in the story of our own life, everyone else is center-stage in theirs too.",
      example:
        "Instead of worrying about how you’re being judged, consider how you make others feel. They'll remember this much more, and you'll make the world a better place.",
      pageTitle: "Your bias is the spotlight effect",
      exampleText:
        "Instead of worrying about how you’re being judged, consider how you make others feel. They'll remember this much more, and you'll make the world a better place.",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Spotlight_effect" target="_blank">Wikipedia</a>\n            ',
    },
  ], 
  ar: [
    {
      name: "arabic",
      title: "arabic",
      slug: "anchoring",
      head: "The first thing you judge influences your judgment of all that follows.",
      first:"The first thing you judge influences your judgment of all that follows.",
      description:
        "Human minds are associative in nature, so the order in which we receive information helps determine the course of our judgments and perceptions. For instance, the first price offered for a used car sets an ‘anchor’ price which will influence how reasonable or unreasonable a counter-offer might seem. Even if we feel like an initial price is far too high, it can make a slightly less-than-reasonable offer seem entirely reasonable in contrast to the anchor price.",
      example:
        "Be especially mindful of this bias during financial negotiations such as houses, cars, and salaries. The initial price offered has proven to have a significant effect.",
      pageTitle: "Your bias is anchoring",
      exampleText:
        "Be especially mindful of this bias during financial negotiations such as houses, cars, and salaries. The initial price offered has proven to have a significant effect.",
      meta: {
        seo: {
          title: "Your bias is anchoring",
          description:
            "The first thing you judge influences your judgment of all that follows. Be especially mindful of this bias during financial negotiations such as houses, cars, and salaries. The initial price offered has proven to have a significant effect.",
        },
        og: {
          "og:title": "Your bias is anchoring",
          "og:description":
            "Be especially mindful of this bias during financial negotiations such as houses, cars, and salaries. The initial price offered has proven to have a significant effect.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/004/original/YourBiasIs_01_anchoring.jpg",
          "og:image:width": 1201,
          "og:image:height": 630,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Anchoring" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "the-sunk-cost-fallacy",
      title: "the sunk cost fallacy",
      slug: "the-sunk-cost-fallacy",
      head: "You irrationally cling to things that have already cost you something.",
      first:
        "You irrationally cling to things that have already cost you something.",
      description:
        "When we've invested our time, money, or emotion into something, it hurts us to let it go. This aversion to pain can distort our better judgment and cause us to make unwise investments. A sunk cost means that we can't recover it, so it's rational to disregard the cost when evaluating. For instance, if you've spent money on a meal but you only feel like eating half of it, it's irrational to continue to stuff your face just because 'you've already paid for it'; especially considering the fact that you're wasting actual time doing so.",
      example:
        "To regain objectivity, ask yourself: had I not already invested something, would I still do so now? What would I counsel a friend to do if they were in the same situation?",
      pageTitle: "Your bias is the sunk cost fallacy",
      exampleText:
        "To regain objectivity, ask yourself: had I not already invested something, would I still do so now? What would I counsel a friend to do if they were in the same situation?",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="http://amzn.to/2erM9nn" target="_blank">You Are Now Less Dumb</a>\n                    <span class="separator">|</span>\n                    <a href="https://en.wikipedia.org/wiki/Sunk_cost" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "the-availability-heuristic",
      title: "the availability heuristic",
      slug: "the-availability-heuristic",
      head: "Your judgments are influenced by what springs most easily to mind.",
      first:
        "Your judgments are influenced by what springs most easily to mind.",
      description:
        "How recent, emotionally powerful, or unusual your memories are can make them seem more relevant. This, in turn, can cause you to apply them too readily. For instance, when we see news reports about homicides, child abductions, and other terrible crimes it can make us believe that these events are much more common and threatening to us than is actually the case.",
      example:
        "Try to gain different perspectives and relevant statistical information rather than relying purely on first judgments and emotive influences.",
      pageTitle: "Your bias is the availability heuristic",
      exampleText:
        "Try to gain different perspectives and relevant statistical information rather than relying purely on first judgments and emotive influences.",
      meta: {
        seo: {
          title: "Your bias is the availability heuristic",
          description:
            "Your judgments are influenced by what springs most easily to mind. How recent, emotionally powerful, or unusual your memories are can make them seem more relevant. This, in turn, can cause you to apply them too readily. For instance, when we see news reports about homicides, child abductions, and other terrible crimes it can make us believe that these events are much more common and threatening to us than is actually the case.",
        },
        og: {
          "og:title": "Your bias is the availability heuristic",
          "og:description":
            "How recent, emotionally powerful, or unusual your memories are can make them seem more relevant. This, in turn, can cause you to apply them too readily. For instance, when we see news reports about homicides, child abductions, and other terrible crimes it can make us believe that these events are much more common and threatening to us than is actually the case.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/017/original/YourBiasIsPreview copy 2.jpg",
          "og:image:width": 1201,
          "og:image:height": 630,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n                    <span class="separator">|</span>\n                    <a href="https://en.wikipedia.org/wiki/Availability_heuristic" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2vHa0Tx" target="_blank">Thinking, Fast and Slow</a>\n            ',
    },
    {
      name: "the-curse-of-knowledge",
      title: "the curse of knowledge",
      slug: "the-curse-of-knowledge",
      head: "Once you understand something you presume it to be obvious to everyone.",
      first:
        "Once you understand something you presume it to be obvious to everyone.",
      description:
        "Things makes sense once they make sense, so it can be hard to remember why they didn't. We build complex networks of understanding and forget how intricate the path to our available knowledge really is. This bias is closely related to the hindsight bias wherein you will tend to believe that an event was predictable all along once it has occurred. We have difficulty reconstructing our own prior mental states of confusion and ignorance once we have clear knowledge.",
      example:
        "When teaching someone something new, go slow and explain like they're ten years old (without being patronizing). Repeat key points and facilitate active practice to help embed knowledge.",
      pageTitle: "Your bias is the curse of knowledge",
      exampleText:
        "When teaching someone something new, go slow and explain like they're ten years old (without being patronizing). Repeat key points and facilitate active practice to help embed knowledge.",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Curse_of_knowledge" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "confirmation-bias",
      title: "confirmation bias",
      slug: "confirmation-bias",
      head: "You favor things that confirm your existing beliefs.",
      first: "You favor things that confirm your existing beliefs.",
      description:
        "We are primed to see and agree with ideas that fit our preconceptions, and to ignore and dismiss information that conflicts with them. You could say that this is the mother of all biases, as it affects so much of our thinking through motivated reasoning. To help counteract its influence we ought to presume ourselves wrong until proven right.",
      example:
        'Think of your ideas and beliefs as software you\'re actively trying to find problems with rather than things to be defended. "The first principle is that you must not fool yourself – and you are the easiest person to fool." \u0003- Richard Feynman',
      pageTitle: "Your bias is confirmation bias",
      exampleText:
        'Think of your ideas and beliefs as software you\'re actively trying to find problems with rather than things to be defended. "The first principle is that you must not fool yourself – and you are the easiest person to fool." \u0003- Richard Feynman',
      meta: {
        seo: {
          title: "Your bias is confirmation bias",
          description:
            "You look for ways to justify your existing beliefs. We automatically find ways to make new information fit our existing narratives and preconceptions, and to dismiss information that does not. You could say that this is the mother of all biases, as it affects so much of our thinking through motivated reasoning. To help counteract its influence we ought to presume ourselves wrong until proven right.",
        },
        og: {
          "og:title": "Your bias is confirmation bias",
          "og:description":
            "You look for ways to justify your existing beliefs. We automatically find ways to make new information fit our existing narratives and preconceptions, and to dismiss information that does not.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/006/original/YourBiasIsPreview copy 4.jpg",
          "og:image:width": 1201,
          "og:image:height": 630,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Confirmation_bias" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2vHa0Tx" target="_blank">Thinking, Fast and Slow</a>\n            ',
    },
    {
      name: "the-dunning-kruger-effect",
      title: "the dunning-kruger effect",
      slug: "the-dunning-kruger-effect",
      head: "The more you know, the less confident you're likely to be.",
      first: "The more you know, the less confident you're likely to be.",
      description:
        "Because experts know just how much they don't know, they tend to underestimate their ability; but it's easy to be over-confident when you have only a simple idea of how things are. Try not to mistake the cautiousness of experts as a lack of understanding, nor to give much credence to lay-people who appear confident but have only superficial knowledge.",
      example:
        "“The whole problem with the world is that fools and fanatics are so certain of themselves, yet wiser people so full of doubts.”\u0003- Bertrand Russell",
      pageTitle: "Your bias is the dunning-kruger effect",
      exampleText:
        "“The whole problem with the world is that fools and fanatics are so certain of themselves, yet wiser people so full of doubts.”\u0003- Bertrand Russell",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "belief-bias",
      title: "belief bias",
      slug: "belief-bias",
      head: "If a conclusion supports your existing beliefs, you'll rationalize anything that supports it.",
      first:
        "If a conclusion supports your existing beliefs, you'll rationalize anything that supports it.",
      description:
        "It's difficult for us to set aside our existing beliefs to consider the true merits of an argument. In practice this means that our ideas become impervious to criticism, and are perpetually reinforced. Instead of thinking about our beliefs in terms of 'true or false' it's probably better to think of them in terms of probability. For example we might assign a 95%+ chance that thinking in terms of probability will help us think better, and a less than 1% chance that our existing beliefs have no room for any doubt. Thinking probabalistically forces us to evaluate more rationally.",
      example:
        "A useful thing to ask is 'when and how did I get this belief?' \u0003We tend to automatically defend our ideas without ever really\u0003 questioning them.",
      pageTitle: "Your bias is belief bias",
      exampleText:
        "A useful thing to ask is 'when and how did I get this belief?' \u0003We tend to automatically defend our ideas without ever really\u0003 questioning them.",
      meta: {
        seo: {
          title: "Your bias is belief bias",
          description:
            "If a conclusion supports your existing beliefs, you'll rationalize anything that supports it. A useful thing to ask is 'when and how did I get this belief?' \u0003We tend to automatically defend our ideas without ever really\u0003 questioning them.",
        },
        og: {
          "og:title": "Your bias is belief bias",
          "og:description":
            "A useful thing to ask is 'when and how did I get this belief?' \u0003We tend to automatically defend our ideas without ever really\u0003 questioning them.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/005/original/YourBiasIsPreview copy 6.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Belief_bias" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="Thinking, Fast and Slow" target="_blank">http://amzn.to/2vHa0Tx</a>\n            ',
    },
    {
      name: "self-serving-bias",
      title: "self-serving bias",
      slug: "self-serving-bias",
      head: "You believe your failures are due to external factors, yet you're responsible for your successes.",
      first:
        "You believe your failures are due to external factors, yet you're responsible for your successes.",
      description:
        "Many of us enjoy unearned privileges, luck and advantages that others do not. It's easy to tell ourselves that we deserve these things, whilst blaming circumstance when things don't go our way. Our desire to protect and exalt our own egos is a powerful force in our psychology. Fostering humility can help countermand this tendency, whilst also making us nicer humans.",
      example:
        "When judging others, be mindful of how this bias interacts \u0003with the just-world hypothesis, fundamental attribution error, \u0003and the in-group bias.",
      pageTitle: "Your bias is self-serving bias",
      exampleText:
        "When judging others, be mindful of how this bias interacts \u0003with the just-world hypothesis, fundamental attribution error, \u0003and the in-group bias.",
      meta: {
        seo: {
          title: "Your bias is self-serving bias",
          description:
            "You believe your failures are due to external factors, yet you're responsible for your successes. Many of us enjoy unearned privileges, luck and advantages that others do not. It's easy to tell ourselves that we deserve these things, whilst blaming circumstance when things don't go our way. ",
        },
        og: {
          "og:title": "Your bias is self-serving bias",
          "og:description":
            "Many of us enjoy unearned privileges, luck and advantages that others do not. It's easy to tell ourselves that we deserve these things, whilst blaming circumstance when things don't go our way. ",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/016/original/YourBiasIsPreview copy 7.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Self-serving_bias" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2vHa0Tx" target="_blank">Thinking, Fast and Slow</a>\n            ',
    },
    {
      name: "the-backfire-effect",
      title: "the backfire effect",
      slug: "the-backfire-effect",
      head: "When some aspect of your core beliefs is challenged, it can cause you to believe even more strongly.",
      first:
        "When some aspect of your core beliefs is challenged, it can cause you to believe even more strongly.",
      description:
        "We can experience being wrong about some ideas as an attack upon our very selves, or our tribal identity. This can lead to motivated reasoning which causes a reinforcement of beliefs, despite disconfirming evidence. Recent research shows that the backfire effect certainly doesn't happen all the time. Most people will accept a correction relating to specific facts, however the backfire effect may reinforce a related or 'parent' belief as people attempt to reconcile a new narrative in their understanding.",
      example:
        "“It ain’t what you don’t know that gets you into trouble. It’s what you know for sure that just ain’t so.” - Mark Twain",
      pageTitle: "Your bias is the backfire effect",
      exampleText:
        "“It ain’t what you don’t know that gets you into trouble. It’s what you know for sure that just ain’t so.” - Mark Twain",
      meta: {
        seo: {
          title: "Your bias is the backfire effect",
          description:
            "When some aspect of your core beliefs is challenged, it can cause you to believe even more strongly. We can experience being wrong about some ideas as an attack upon our very selves, or our tribal identity. This can lead to motivated reasoning which causes a reinforcement of beliefs, despite disconfirming evidence.",
        },
        og: {
          "og:title": "Your bias is the backfire effect",
          "og:description":
            "We can experience being wrong about some ideas as an attack upon our very selves, or our tribal identity. This can lead to motivated reasoning which causes a reinforcement of beliefs, despite disconfirming evidence.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/018/original/YourBiasIsPreview copy 8.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="http://amzn.to/2erM9nn" target="_blank">You Are Now Less Dumb</a>\n            ',
    },
    {
      name: "the-barnum-effect",
      title: "the barnum effect",
      slug: "the-barnum-effect",
      head: "You see personal specifics in vague statements by filling in the gaps.",
      first:
        "You see personal specifics in vague statements by filling in the gaps.",
      description:
        "Because our minds are given to making connections, it's easy for us \u0003to take nebulous statements and find ways to interpret them so that they seem specific and personal. The combination of our egos wanting validation with our strong inclination to see patterns and connections means that when someone is telling us a story about ourselves, we look to find the signal and ignore all the noise.",
      example:
        "Psychics, astrologers and others use this bias to make it seem like they're telling you something relevant. Consider how things might be interpreted to apply to anyone, not just you.",
      pageTitle: "Your bias is the barnum effect",
      exampleText:
        "Psychics, astrologers and others use this bias to make it seem like they're telling you something relevant. Consider how things might be interpreted to apply to anyone, not just you.",
      meta: {
        seo: {
          title: "Your bias is the barnum effect",
          description:
            "You see personal specifics in vague statements by filling in the gaps. Because our minds are given to making connections, it's easy for us \u0003to take nebulous statements and find ways to interpret them so that they seem specific and personal. Psychics, astrologers and others use this bias to make it seem like they're telling you something relevant. Consider how things might be interpreted to apply to anyone, not just you.",
        },
        og: {
          "og:title": "Your bias is the barnum effect",
          "og:description":
            "Because our minds are given to making connections, it's easy for us \u0003to take nebulous statements and find ways to interpret them so that they seem specific and personal. Psychics, astrologers and others use this bias to make it seem like they're telling you something relevant. Consider how things might be interpreted to apply to anyone, not just you.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/019/original/YourBiasIsPreview copy 9.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Barnum_effect" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "groupthink",
      title: "groupthink",
      slug: "groupthink",
      head: "You let the social dynamics of a group situation override the best outcomes.",
      first:
        "You let the social dynamics of a group situation override the best outcomes.",
      description:
        "Dissent can be uncomfortable and dangerous to one's social standing, and so often the most confident or first voice will determine \u0003group decisions. Because of the Dunning-Kruger effect, the most confident voices are also often the most ignorant.",
      example:
        "Rather than openly contradicting others, seek to facilitate objective means of evaluation and critical thinking practices \u0003as a group activity.",
      pageTitle: "Your bias is groupthink",
      exampleText:
        "Rather than openly contradicting others, seek to facilitate objective means of evaluation and critical thinking practices \u0003as a group activity.",
      meta: {
        seo: {
          title: "Your bias is groupthink",
          description:
            "You let the social dynamics of a group situation override the best outcomes. Dissent can be uncomfortable and dangerous to one's social standing, and so often the most confident or first voice will determine \u0003group decisions.",
        },
        og: {
          "og:title": "Your bias is groupthink",
          "og:description":
            "Dissent can be uncomfortable and dangerous to one's social standing, and so often the most confident or first voice will determine \u0003group decisions.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/009/original/YourBiasIsPreview copy 10.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Groupthink" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "negativity-bias",
      title: "negativity bias",
      slug: "negativity-bias",
      head: "You allow negative things to disproportionately influence your thinking.",
      first:
        "You allow negative things to disproportionately influence your thinking.",
      description:
        "The pain of loss and hurt are felt more keenly and persistently than the fleeting gratification of pleasant things. We are primed for survival, and our aversion to pain can distort our judgment for a modern world. In an evolutionary context it makes sense for us to be heavily biased to avoid threats, but because this bias affects our judgments in other ways it means we aren't giving enough weight to the positives.",
      example:
        "Pro-and-con lists, as well as thinking in terms of probabilities, \u0003can help you evaluate things more objectively than relying on \u0003a cognitive impression.",
      pageTitle: "Your bias is negativity bias",
      exampleText:
        "Pro-and-con lists, as well as thinking in terms of probabilities, \u0003can help you evaluate things more objectively than relying on \u0003a cognitive impression.",
      meta: {
        seo: {
          title: "Your bias is negativity bias",
          description:
            "You allow negative things to disproportionately influence your thinking. The pain of loss and hurt are felt more keenly and persistently than the fleeting gratification of pleasant things. We are primed for survival, and our aversion to pain can distort our judgment for a modern world. In an evolutionary context it makes sense for us to be heavily biased to avoid threats, but because this bias affects our judgments in other ways it means we aren't giving enough weight to the positives.",
        },
        og: {
          "og:title": "Your bias is negativity bias",
          "og:description":
            "The pain of loss and hurt are felt more keenly and persistently than the fleeting gratification of pleasant things. We are primed for survival, and our aversion to pain can distort our judgment for a modern world. In an evolutionary context it makes sense for us to be heavily biased to avoid threats, but because this bias affects our judgments in other ways it means we aren't giving enough weight to the positives.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/012/original/YourBiasIsPreview copy 11.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Negativity_bias" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "declinism",
      title: "declinism",
      slug: "declinism",
      head: "You remember the past as better than it was, and expect the future to be worse than it will likely be.",
      first:
        "You remember the past as better than it was, and expect the future to be worse than it will likely be.",
      description:
        "Despite living in the most peaceful and prosperous time in history, many people believe things are getting worse. The 24 hour news cycle, with its reporting of overtly negative and violent events, may account for some of this effect. We can also look to the generally optimistic view of the future in the early 20th century as being shifted to a dystopian and apocalyptic expectation after the world wars, and during the cold war. The greatest tragedy of this bias may be that our collective expectation of decline may contribute to a real-world self-fulfilling prophecy.",
      example:
        "Instead of relying on nostalgic impressions of how great things used to be, use measurable metrics such as life expectancy, levels of crime and violence, and prosperity statistics.",
      pageTitle: "Your bias is declinism",
      exampleText:
        "Instead of relying on nostalgic impressions of how great things used to be, use measurable metrics such as life expectancy, levels of crime and violence, and prosperity statistics.",
      meta: {
        seo: {
          title: "Your bias is declinism",
          description:
            "You remember the past as better than it was, and expect the future to be worse than it will likely be. Instead of relying on nostalgic impressions of how great things used to be, use measurable metrics such as life expectancy, levels of crime and violence, and prosperity statistics.\r\n",
        },
        og: {
          "og:title": "Your bias is declinism",
          "og:description":
            "Instead of relying on nostalgic impressions of how great things used to be, use measurable metrics such as life expectancy, levels of crime and violence, and prosperity statistics.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/007/original/YourBiasIsPreview copy 12.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://youtu.be/jbkSRLYSojo" target="_blank">200 Countries, 200 years, 4 Minutes - The Joy of Stats (YouTube)</a>\n            ',
    },
    {
      name: "the-framing-effect",
      title: "the framing effect",
      slug: "the-framing-effect",
      head: "You allow yourself to be unduly influenced by context and delivery.",
      first:
        "You allow yourself to be unduly influenced by context and delivery.",
      description:
        "We all like to think that we think independently, but the truth is that all of us are, in fact, influenced by delivery, framing and subtle cues. \u0003This is why the ad industry is a thing, despite almost everyone believing they’re not affected by advertising messages. The phrasing of how a question is posed, such as for a proposed law being voted on, has been shown to have a significant effect on the outcome.",
      example:
        "Only when we have the intellectual humility to accept the fact that we can be manipulated, can we hope to limit how much we are. Try to be mindful of how things are being put to you.",
      pageTitle: "Your bias is the framing effect",
      exampleText:
        "Only when we have the intellectual humility to accept the fact that we can be manipulated, can we hope to limit how much we are. Try to be mindful of how things are being put to you.",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Framing_effect_(psychology)" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2vHa0Tx" target="_blank">Thinking, Fast and Slow</a>\n            ',
    },
    {
      name: "fundamental-attribution-error",
      title: "fundamental attribution error",
      slug: "fundamental-attribution-error",
      head: "You judge others on their character, but yourself on the situation.",
      first:
        "You judge others on their character, but yourself on the situation.",
      description:
        "If you haven’t had a good night’s sleep, you know why you’re being a bit slow; but if you observe someone else being slow you don’t have such knowledge and so you might presume them to just be a slow person. Because of this disparity in knowledge we often overemphasize the influence of circumstance for our own failings, as well as underestimating circumstantial factors to explain other people's problems.",
      example:
        "It's not only kind to view others' situations with charity, it's more objective too. Be mindful to also err on the side of taking personal responsibility rather than justifying and blaming.",
      pageTitle: "Your bias is fundamental attribution error",
      exampleText:
        "It's not only kind to view others' situations with charity, it's more objective too. Be mindful to also err on the side of taking personal responsibility rather than justifying and blaming.",
      meta: {
        seo: {
          title: "your bias is the fundamental attribution error",
          description:
            "You judge others on their character, but yourself on the situation. If you haven’t had a good night’s sleep, you know why you’re being a bit slow; but if you observe someone else being slow you don’t have such knowledge and so you might presume them to just be a slow person. ",
        },
        og: {
          "og:title": "your bias is the fundamental attribution error",
          "og:description":
            "If you haven’t had a good night’s sleep, you know why you’re being a bit slow; but if you observe someone else being slow you don’t have such knowledge and so you might presume them to just be a slow person. ",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/008/original/YourBiasIsPreview copy 14.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Fundamental_attribution_error" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "the-halo-effect",
      title: "the halo effect",
      slug: "the-halo-effect",
      head: "How much you like someone, or how attractive they are, influences your other judgments of them.",
      first:
        "How much you like someone, or how attractive they are, influences your other judgments of them.",
      description:
        "Our judgments are associative and automatic, and so if we want to be objective we need to consciously control for irrelevant influences. This is especially important in a professional setting. Things like attractiveness can unduly influence issues as important as a jury deciding someone's guilt or innocence. If someone is successful or fails in one area, this can also unfairly color our expectations of them in another area.",
      example:
        "If you notice that you're giving consistently high or low marks across the board, it's worth considering that your judgment may be suffering from the halo effect.",
      pageTitle: "Your bias is the halo effect",
      exampleText:
        "If you notice that you're giving consistently high or low marks across the board, it's worth considering that your judgment may be suffering from the halo effect.",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Halo_effect" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2erM9nn" target="_blank">You Are Now Less Dumb</a>\n            ',
    },
    {
      name: "optimism-bias",
      title: "optimism bias",
      slug: "optimism-bias",
      head: "You overestimate the likelihood of positive outcomes.",
      first: "You overestimate the likelihood of positive outcomes.",
      description:
        "There can be benefits to a positive attitude, but it's unwise to allow such an attitude to adversely affect our ability to make rational judgments (they're not mutually exclusive). Wishful thinking can be a tragic irony insofar as it can create more negative outcomes, such as in the case of problem gambling.",
      example:
        "If you make rational, realistic judgments you'll have a lot more to \u0003feel positive about.",
      pageTitle: "Your bias is optimism bias",
      exampleText:
        "If you make rational, realistic judgments you'll have a lot more to \u0003feel positive about.",
      meta: {
        seo: {
          title: "Your bias is optimism bias",
          description:
            "You overestimate the likelihood of positive outcomes. There can be benefits to a positive attitude, but it's unwise to allow such an attitude to adversely affect our ability to make rational judgments (they're not mutually exclusive). Wishful thinking can be a tragic irony insofar as it can create more negative outcomes, such as in the case of problem gambling.",
        },
        og: {
          "og:title": "Your bias is optimism bias",
          "og:description":
            "There can be benefits to a positive attitude, but it's unwise to allow such an attitude to adversely affect our ability to make rational judgments (they're not mutually exclusive). Wishful thinking can be a tragic irony insofar as it can create more negative outcomes, such as in the case of problem gambling.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/013/original/YourBiasIsPreview copy 16.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Optimism_bias" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "pessimism-bias",
      title: "pessimism bias",
      slug: "pessimism-bias",
      head: "You overestimate the likelihood of negative outcomes.",
      first: "You overestimate the likelihood of negative outcomes.",
      description:
        "Pessimism is often a defense mechanism against disappointment, or it can be the result of depression and anxiety disorders. Pessimists often justify their attitude by saying that they'll either be vindicated or pleasantly surprised, however a pessimistic attitude may also limit potential positive outcomes. It should also be noted that pessimism is something very different to skepticism: the latter is a rational approach that seeks to remain impartial, while the former is an expectation of bad outcomes.",
      example:
        "Perhaps the worst aspect of pessimism is that even if something good happens, you'll probably feel pessimistic about it anyway.",
      pageTitle: "Your bias is pessimism bias",
      exampleText:
        "Perhaps the worst aspect of pessimism is that even if something good happens, you'll probably feel pessimistic about it anyway.",
      meta: {
        seo: {
          title: "Your bias is pessimism bias",
          description:
            "You overestimate the likelihood of negative outcomes. Pessimism is often a defense mechanism against disappointment, or it can be the result of depression and anxiety disorders.",
        },
        og: {
          "og:title": "Your bias is pessimism bias",
          "og:description":
            "Pessimism is often a defense mechanism against disappointment, or it can be the result of depression and anxiety disorders.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/014/original/YourBiasIsPreview copy 17.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading: "",
    },
    {
      name: "just-world-hypothesis",
      title: "just-world hypothesis",
      slug: "just-world-hypothesis",
      head: "Your preference for justice makes you presume it exists.",
      first: "Your preference for justice makes you presume it exists.",
      description:
        "A world in which people don't always get what they deserve, hard work doesn't always pay off, and injustice happens is an uncomfortable one that threatens our preferred narrative. However, it is also the reality. This bias is often manifest in ideas such as 'what goes around comes around' or an expectation of 'karmic balance', and can also lead to blaming victims of crime and circumstance.",
      example:
        "A more just world requires understanding rather than blame. \u0003Remember that everyone has their own life story, we’re all fallible, and bad things happen to good people.",
      pageTitle: "Your bias is just-world hypothesis",
      exampleText:
        "A more just world requires understanding rather than blame. \u0003Remember that everyone has their own life story, we’re all fallible, and bad things happen to good people.",
      meta: {
        seo: {
          title: "Your bias is the just world hypothesis",
          description:
            "Your preference for justice makes you presume it exists. A world in which people don't always get what they deserve, hard work doesn't always pay off, and injustice happens is an uncomfortable one that threatens our preferred narrative. However, it is also the reality. This bias is often manifest in ideas such as 'what goes around comes around' or an expectation of 'karmic balance', and can also lead to blaming victims of crime and circumstance.",
        },
        og: {
          "og:title": "Your bias is the just world hypothesis",
          "og:description":
            "A world in which people don't always get what they deserve, hard work doesn't always pay off, and injustice happens is an uncomfortable one that threatens our preferred narrative. However, it is also the reality. This bias is often manifest in ideas such as 'what goes around comes around' or an expectation of 'karmic balance', and can also lead to blaming victims of crime and circumstance.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/011/original/YourBiasIsPreview copy 18.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Just-world_hypothesis" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "in-group-bias",
      title: "in-group bias",
      slug: "in-group-bias",
      head: "You unfairly favor those who belong to your group.",
      first: "You unfairly favor those who belong to your group.",
      description:
        "We presume that we're fair and impartial, but the truth is that \u0003we automatically favor those who are most like us, or belong to \u0003our groups. This blind tribalism has evolved to strengthen social cohesion, however in a modern and multicultural world it can have the opposite effect.",
      example:
        "Try to imagine yourself in the position of those in out-groups; whilst also attempting to be dispassionate when judging those who belong to your in-groups.",
      pageTitle: "Your bias is in-group bias",
      exampleText:
        "Try to imagine yourself in the position of those in out-groups; whilst also attempting to be dispassionate when judging those who belong to your in-groups.",
      meta: {
        seo: {
          title: "Your bias is in-group bias",
          description:
            "You unfairly favor those who belong to your group. We presume that we're fair and impartial, but the truth is that \u0003we automatically favor those who are most like us, or belong to \u0003our groups. This blind tribalism has evolved to strengthen social cohesion, however in a modern and multicultural world it can have the opposite effect.",
        },
        og: {
          "og:title": "Your bias is in-group bias",
          "og:description":
            "We presume that we're fair and impartial, but the truth is that \u0003we automatically favor those who are most like us, or belong to \u0003our groups. This blind tribalism has evolved to strengthen social cohesion, however in a modern and multicultural world it can have the opposite effect.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/010/original/YourBiasIsPreview copy 19.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/In-group_favoritism" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "the-placebo-effect",
      title: "the placebo effect",
      slug: "the-placebo-effect",
      head: "If you believe you're taking medicine it can sometimes 'work' even if it's fake.",
      first:
        "If you believe you're taking medicine it can sometimes 'work' even if it's fake.",
      description:
        "The placebo effect can work for stuff that our mind influences (such as pain) but not so much for things like viruses or broken bones. Things like the size and color of pills can have an influence on how strong the effect is and may even result in real physiological outcomes. We can also falsely attribute getting better to an inert substance simply because our immune system has fought off an infection i.e. we would have recovered in the same amount of time anyway.",
      example:
        "Homeopathy, acupuncture, and many other forms of natural 'medicine' have been proven to be no more effective than placebo. Keep a healthy body and bank balance by using evidence-based medicine from a qualified doctor.",
      pageTitle: "Your bias is the placebo effect",
      exampleText:
        "Homeopathy, acupuncture, and many other forms of natural 'medicine' have been proven to be no more effective than placebo. Keep a healthy body and bank balance by using evidence-based medicine from a qualified doctor.",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Placebo" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "the-bystander-effect",
      title: "the bystander effect",
      slug: "the-bystander-effect",
      head: "You presume someone else is going to do something in an emergency situation.",
      first:
        "You presume someone else is going to do something in an emergency situation.",
      description:
        "When something terrible is happening in a public setting we can experience a kind of shock and mental paralysis that distracts us from a sense of personal responsibility. The problem is that everyone can experience this sense of deindividuation in a crowd. This same sense of losing our sense of self in a crowd has been linked to violent and anti-social behaviors. Remaining self-aware  requires some amount of effortful reflection in group situations.",
      example:
        "If there's an emergency situation, presume to be the one who will help or call for help. Be the change you want to see in the world.",
      pageTitle: "Your bias is the bystander effect",
      exampleText:
        "If there's an emergency situation, presume to be the one who will help or call for help. Be the change you want to see in the world.",
      meta: {
        seo: {
          title: "Your bias is the bystander effect",
          description:
            "You presume someone else is going to do something in an emergency situation. When something terrible is happening in a public setting we can experience a kind of shock and mental paralysis that distracts us from a sense of personal responsibility. If there's an emergency situation, presume to be the one who will help or call for help.",
        },
        og: {
          "og:title": "Your bias is the bystander effect",
          "og:description":
            "When something terrible is happening in a public setting we can experience a kind of shock and mental paralysis that distracts us from a sense of personal responsibility. If there's an emergency situation, presume to be the one who will help or call for help.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/020/original/YourBiasIsPreview copy 21.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Bystander_effect" target="_blank">Wikipedia</a>\n                    <span class="separator">|</span>\n                    <a href="http://amzn.to/2wpTTea" target="_blank">You Are Not So Smart</a>\n            ',
    },
    {
      name: "reactance",
      title: "reactance",
      slug: "reactance",
      head: "You'd rather do the opposite of what someone is trying to make you do.",
      first:
        "You'd rather do the opposite of what someone is trying to make you do.",
      description:
        "When we feel our liberty is being constrained, our inclination is to resist, however in doing so we can over-compensate. While blind conformity is far from an ideal way to approach things, neither is being a knee-jerk contrarian.",
      example:
        "Be careful not to lose objectivity when someone is being coercive/manipulative, or trying to force you do something. \u0003Wisdom springs from reflection, folly from reaction.",
      pageTitle: "Your bias is reactance",
      exampleText:
        "Be careful not to lose objectivity when someone is being coercive/manipulative, or trying to force you do something. \u0003Wisdom springs from reflection, folly from reaction.",
      meta: {
        seo: {
          title: "Your bias is reactance",
          description:
            "You'd rather do the opposite of what someone is trying to make you do. When we feel our liberty is being constrained, our inclination is to resist, however in doing so we can over-compensate. While blind conformity is far from an ideal way to approach things, neither is being a knee-jerk contrarian.",
        },
        og: {
          "og:title": "Your bias is reactance",
          "og:description":
            "When we feel our liberty is being constrained, our inclination is to resist, however in doing so we can over-compensate. While blind conformity is far from an ideal way to approach things, neither is being a knee-jerk contrarian.",
          "og:image":
            "https://yourbias.is/system/App/Meta/og_images/000/000/015/original/YourBiasIsPreview copy 22.jpg",
          "og:image:width": 1201,
          "og:image:height": 631,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Reactance_(psychology)" target="_blank">Wikipedia</a>\n            ',
    },
    {
      name: "the-spotlight-effect",
      title: "the spotlight effect",
      slug: "the-spotlight-effect",
      head: "You overestimate how much people notice how you look and act.",
      first: "You overestimate how much people notice how you look and act.",
      description:
        "Most people are much more concerned about themselves than they are about you. Absent overt prejudices, people generally want to like and get along with you as it gives them validation too. It's healthy to remember that although we're the main character in the story of our own life, everyone else is center-stage in theirs too.",
      example:
        "Instead of worrying about how you’re being judged, consider how you make others feel. They'll remember this much more, and you'll make the world a better place.",
      pageTitle: "Your bias is the spotlight effect",
      exampleText:
        "Instead of worrying about how you’re being judged, consider how you make others feel. They'll remember this much more, and you'll make the world a better place.",
      meta: {
        seo: {
          title: null,
          description: null,
        },
        og: {
          "og:title": null,
          "og:description": null,
          "og:image": null,
          "og:image:width": null,
          "og:image:height": null,
        },
      },
      furtherReading:
        '<b>Further reading</b><br>\n            <a href="https://en.wikipedia.org/wiki/Spotlight_effect" target="_blank">Wikipedia</a>\n            ',
    },
  ], 
  }

  // map the array and return the card component
  const cardList = cards[lang].map((card: { title: string; description: string; example: string; first: string; }) => {
    // destructure the card object
    const { title, description, example, first } = card
    // return the card component
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
          {/* <CardDescription>{description}</CardDescription> */}
        </CardHeader>
        <CardContent>
          {/* <p>{example}</p> */}
        </CardContent>
        <CardFooter className="text-center">
          <p>{first}</p>
        </CardFooter>
      </Card>
    )
  })

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Biases
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          A list of cognitive biases and the translation of it with few
          examples.
        </p>
        {/* render button */}
        <Button onClick={() => setLang(lang === "en" ? "ar" : "en")
        } className="mt-4">
          Change Language
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">{/* user the cardList */ cardList}</div>
    </section>
  )
}
