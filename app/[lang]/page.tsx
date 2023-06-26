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
import Link from "next/link"
import { getDictionary } from '../../dictionaries/dictionaries'


export default async function IndexPage({ params: { lang } }) {
  const dictionary = await getDictionary(lang)

  // map the array and return the card component
  const cardList = dictionary.cards.map((card: { title: string; description: string; example: string; first: string; }) => {
    // destructure the card object
    const { title, description, example, first } = card
    // return the card component
    return (
      <Card key={title}>
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
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Biases {lang}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          A list of cognitive biases and the translation of it with few
          examples.
        </p>
        <Link className="mt-4" href={lang === "en" ? "ar" : "en"}>
          <Button >
            {lang === "en" ? "arabic" : "english"}
          </Button>
        </Link>
        {/* language switcher by links */}


      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">{/* user the cardList */ cardList}</div>
    </section>
  )
}
