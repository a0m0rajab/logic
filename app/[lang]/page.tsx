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
  const cardList = dictionary.cards.map((card: { title: string; description: string; example: string; first: string; slug:string }) => {
    // destructure the card object
    const { title, description, example, first, slug } = card
    // return the card component
    return (
      <Card key={slug}>
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
        <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
          {dictionary.biases}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          {dictionary.description}
        </p>
        <Link className="mt-4" href={lang === "en" ? "ar" : "en"}>
          <Button >
            {lang === "en" ? "Arabic" : "English"}
          </Button>
        </Link>
        {/* language switcher by links */}


      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">{/* user the cardList */ cardList}</div>
    </section>
  )
}
