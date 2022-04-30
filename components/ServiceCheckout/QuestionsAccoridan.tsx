import Accordion from 'react-bootstrap/Accordion';

interface AccordionQuestion {
  question: string;
  answer: string;
}

function QuestionAccordian(props: {
  question: AccordionQuestion;
  idx: number;
}) {
  return (
    <Accordion.Item eventKey={props.idx.toString()}>
      <Accordion.Header>{props.question.question}</Accordion.Header>
      <Accordion.Body>{props.question.answer}</Accordion.Body>
    </Accordion.Item>
  );
}

export default function QuestionsAccordion(props: {
  questions: AccordionQuestion[];
}) {
  if (!props.questions.length) {
    return (
      <Accordion>
        <QuestionAccordian
          question={{
            question: 'Nobody has asked a question yet.',
            answer: 'Please reach out!',
          }}
          idx={0}
        />
      </Accordion>
    );
  }
  return (
    <Accordion>
      {props.questions.map((q, i) => (
        <QuestionAccordian question={q} idx={i} />
      ))}
    </Accordion>
  );
}
