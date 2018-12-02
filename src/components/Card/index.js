import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Post, Title, Date, Excerpt } from './Card.css'

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Img fluid={heroImage.fluid} />
        <Title>{title}</Title>
        <Date>{publishDate}</Date>
        <Excerpt
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.excerpt,
          }}
        />
      </Link>
    </Post>
  )
}

export default Card
