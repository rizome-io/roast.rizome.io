import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
import { Card, Container, Flex, Grid, Heading } from "theme-ui";
export const Feats = () => {

  const {featImgs } = useStaticQuery(
    graphql`
      query {
        featImgs: allFile(
          filter: {relativePath: {glob: "images/*icon*"}},
          sort: {fields: name, order: ASC}) {
          edges {
            node {
              id
              childImageSharp {
                fluid(quality: 90, maxHeight: 250) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  );


  const img = featImgs.edges.map(a => a.node.childImageSharp)
  const content = [
    {
      header: 'independent operation',
      body: 'value decentralization and encourage you to staking with smaller pools'
    },
    {
      header: 'cloud infrastructure',
      body: 'leverage DigitalOcean provisioning to achieve no distruptions on operation'
    },
    {
      header: 'security',
      body: 'no root access, key based auth, ufw, fail2ban, vpc, no private keys on servers'
    }
  ];

  const cardsx = { p: ['1em', '2em'], pt: [0, 0], m: '1em', width: [ '28em', '20em', '24em' ], textAlign: 'center' }
  return (
    <Flex sx={{justifyContent: 'center', flexWrap: 'wrap', width: '100%'}}>
        {content.map((c, i) =>
          <Card sx={cardsx} key={i}>
            <Container sx={{width: [ '80%', '60%' ], mt: [-20, 0, 0, -10]}}>
            <Img fluid={img[i].fluid} sx={ {mx: 'auto'} } />
            </Container>
            <Heading as='h3' sx={{mt: [ -20, 0, 0, -20 ], mb: '1em'}}>
              {c.header}
            </Heading>
            <Container>
              {c.body}
            </Container>

          </Card>
        )}
    </Flex>
  )
};
