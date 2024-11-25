import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from '@mui/material';
import { ExpandMore, Add, Remove } from '@mui/icons-material';

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: 'What is a Linebet partnership program?',
      answer:
        'This is the optimal system of marketing used by webmasters, bloggers, channel and page administrators on social networks and many others who can promote leading gambling brands with a high reputation.',
    },
    { question: 'Who is it for?', answer: 'This program is for marketers and webmasters.' },
    { question: 'Why exactly are we?', answer: 'We are trusted for our results and transparency.' },
    { question: 'Can we trust you?', answer: 'Yes, our reputation speaks for itself.' },
    {
      question: 'How partnership program works?',
      answer: 'It works by sharing referrals and earning commissions.',
    },
    {
      question: 'Participation in the program for free?',
      answer: 'Yes, participation in the program is absolutely free.',
    },
    {
      question: "What's your advantage over the rest?",
      answer: 'We offer competitive rates and excellent support.',
    },
    {
      question: 'How to register on the partnership program site?',
      answer: 'You can register by visiting our official site and following the instructions.',
    },
    { question: 'Where to begin?', answer: 'Start by creating an account and exploring our tools.' },
  ];

  return (
    <Box sx={{ maxWidth: 1000, mx: '1em', my: 4 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        FAQs
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This page will tell you how to work with the Linebet affiliate program. The information
        provided is intended to quickly deal with issues you may have when working with the affiliate program.
      </Typography>
      <TextField
        placeholder="Search questions"
        fullWidth
        variant="outlined"
        sx={{ mb: 3 }}
      />
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{ mb: 2, backgroundColor: expanded === index ? '#e8f5e9' : '#f8fafa' }}
        >
          <AccordionSummary
            expandIcon={expanded === index ? <Remove /> : <Add />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
