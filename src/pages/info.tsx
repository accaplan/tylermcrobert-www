import Prismic from "prismic-javascript"
import { Client } from "util/prismic"
import { NextPage } from "next"
import { IInfoRes } from "types/Prismic"
import { Info } from "components"

interface IProps {
  infoRes?: IInfoRes
}

const InfoPage: NextPage<IProps> = ({ infoRes }) => {
  return <Info data={infoRes} />
}

export async function getStaticProps({ req }) {
  const infoRes: IInfoRes = await Client(req).query(
    Prismic.Predicates.at("document.type", "info"),
    {}
  )

  return {
    props: { infoRes },
  }
}

export default InfoPage
