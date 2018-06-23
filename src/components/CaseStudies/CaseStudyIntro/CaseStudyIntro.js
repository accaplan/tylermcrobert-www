import React from 'react';
import { RichText } from 'prismic-reactjs';
import styled from 'styled-components';

const CaseStudyIntro = (props) => {
  const { title, deliverables, description } = props.data;

  const CaseStudyIntroWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .caseStudyIntro__title{
      flex:1;
      min-height: 400px;
      display: flex;
      align-items: center;
      text-align: center;
      font-size: calc(2.023em + 1vw);
    }

    .caseStudyIntro__info {
      display: flex;
      text-align: left;
      max-width: 48em;

      &__deliverables,
      &__description {
        margin: 0 1em;
      }

      &__description {
        flex-basis: 70%;
      }
    }
  `;

  return (
    <CaseStudyIntroWrapper className="caseStudyIntro">
      <h1 className="caseStudyIntro__title">{RichText.asText(title)}</h1>
      <div className="caseStudyIntro__info">
        <p className="caseStudyIntro__info__deliverables">{deliverables}</p>
        <p className="caseStudyIntro__info__description">{RichText.asText(description)}</p>
      </div>
    </CaseStudyIntroWrapper>
  );
};

export default CaseStudyIntro;
