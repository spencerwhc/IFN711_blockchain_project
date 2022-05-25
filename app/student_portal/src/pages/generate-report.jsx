import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import { useState } from 'react';
import CustomDropdownList from '../components/CustomDropDown/CustomDropdownList';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import Close from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { difference, uniq } from 'lodash';
import { postReport } from '../service/api';
import { customAlphabet } from 'nanoid';

const demoData2022 = [
  {
    title: 'IFN711: IT Industry Project',
    assessments: [
      {
        ID: 'n10864989_IFN711_22se1_1',
        Semester: '1',
        StartDate: '23/05/2022',
        UnitId: 'IFN711',
        UnitName: 'Industry Project',
        AssessmentName: 'Project Plan',
        Criteria: [
          'Introduction (10%)',
          'Project Management Activities & Team Contracts (25%)',
          'Scope,Deliverables,Solution,Delivery & Implmentation Assignment (50%)'
        ],
        Achievement: [
          'Background of the Industry/partner and the problem/ opportunity proposed to be addressed is described precisely with comprehensive but succinct content.',
          'An appropriate PM approach is adopted clearly along with some justification and alignment for the given scope and deliverables.',
          'Background of the Industry/partner and the problem/ opportunity proposed to be addressed is described precisely with comprehensive but succinct content.'
        ]
      },
      {
        ID: 'n10864989_IFN711_22se1_2',
        Semester: '1',
        StartDate: '04/06/2022',
        UnitId: 'IFN711',
        UnitName: 'Industry Project',
        AssessmentName: 'Reflectioin Assessment',
        Criteria: [
          'Comprehension of project (60%) ',
          'Communication and engagement (40%)'
        ],
        Achievement: [
          'Demonstrates sophisticated reasoning-the ability to break down the pertinent information into component parts and to detect relationships of one part to another and to the whole.',
          'The nature of the project (or component) and its significance were communicated in a sophisticated fashion.'
        ]
      }
    ]
  }
];

const demoData2021 = [
  {
    title: 'IFN666: Web and Mobile Application Development',
    assessments: [
      {
        ID: 'n10864989_IFN666_21se2_1',
        Semester: '2',
        StartDate: '16/06/2021',
        UnitId: 'IFN666',
        UnitName: 'Web and Mobile Application Development',
        AssessmentName: 'Client-Side Web Dev with React',
        Criteria: ['Functionality', 'Peformance', 'UI Design', 'Code Quality'],
        Achievement: [
          'Home/Stocks/Screener page. No direct quote/history page. Search + table + paging + sorting+ date picker + Chart implemented. router used',
          'Very good structure, modular',
          'Very good. some color. Good home page.',
          'Good seperation of style and functions. Components used: axios, Ag-grid, recharts, router, antd and more.'
        ]
      },
      {
        ID: 'n10864989_IFN666_21se2_2',
        Semester: '2',
        StartDate: '24/06/2021',
        UnitId: 'IFN666',
        UnitName: 'Web and Mobile Application Development',
        AssessmentName: 'Capstone Project',
        Criteria: [
          'Front-end Mobile Application Functionality',
          'Front-end Application Robustness ',
          'Front-end Application UI Design',
          'Backend functionality, error responses and application reliability.'
        ],
        Achievement: [
          'The client side application implements all of the functionality as listed, and is thoroughly professional in its implementation and performance.',
          'The application is robust, without any noticeable errors and handles service failures and errors gracefully.',
          'The application looks professional mostly, and the principal use cases are readily executed, though there may be some clumsiness in the workflow. The user generally has little trouble navigating the app.',
          'The application is robust and executes without noticeable error and handles service failures and errors gracefully. Error conditions are returned and response codes are perfectly according to specification.'
        ]
      }
    ]
  },
  {
    title: 'IFN662: Enterprise Systems and Applications',
    assessments: [
      {
        ID: 'n10864989_IFN662_21se2_1',
        Semester: '2',
        startDate: '12/04/2021',
        UnitId: 'IFN662',
        UnitName: 'Enterprise Systems and Applications',
        AssessmentName: 'Assessment Task 1',
        Criteria: [
          'Business Elements Diagram and Rationale',
          'Business Process Model',
          'UML Class Diagram '
        ],
        Achievement: [
          'Your graphical depiction of the business elements diagram was consistently clear, correct, logical and well structured, with all elements consistently and accurately labelled and connected. ',
          'Your business process model thoroughly and accurately reflected the fulfilment processes effectively',
          'Your UML class diagram and explanation was consistently clear and logical.'
        ]
      },
      {
        ID: 'n10864989_IFN662_21se2_2',
        Semester: '2',
        StartDate: '12/04/2021',
        UnitId: 'IFN662',
        UnitName: 'Enterprise Systems and Applications',
        AssessmentName: 'Assessment Task 2',
        Criteria: ['Configuration', 'Bill of Materials', 'ERP Extensions'],
        Achievement: [
          'You configured the required business elements for SHIP BUILDERS in a manner that was consistently clear, correct, and logical.',
          'You clearly, concisely and consistently articulated your understanding of the bill of materials and related processes.',
          'You produced an extremely compelling document that clearly, concisely, and accurately detailed why SHIP BUILDERS should invest in BI, SCM and CRM.'
        ]
      }
    ]
  }
];



export default function Generate() {
  const [counter, setCounter] = useState(0);
  const [assessmentList, setAssessmentList] = useState([]);
  const [generate, setgenerate] = useState(false);
  const [generateCancel, setGenerateCancel] = useState(false);
  const openGenerate = () => setgenerate(true);
  const closeGenerate = () => setgenerate(false);
  const openGenerateError = () => {
    setgenerate(false);
    setGenerateCancel(true);
  };
  const closeGenerateError = () => setGenerateCancel(false);

  const likeDislikeMutate = (n) => {
    setCounter((oldCount) => oldCount + n);
  };

  const updateAssessmentList = (id, action) => {
    if (action === 'add') {
      setAssessmentList(uniq([...assessmentList, id]));
    } else {
      const list = difference(assessmentList, [id]);
      setAssessmentList(list);
    }
  };

  // To do: set current date
  const onGenerate = async () => {
    const randomId = customAlphabet('1234567890abcdef', 6);
    const reportData = {
      ID: randomId(),
      StudentID: 'n10864989',
      AssessmentIDs: assessmentList,
      Status: 'Pending',
      createdDate: '25/05/2022'
    };

    console.log(reportData);
    try {
      await postReport(reportData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '4' }}></div>
          <div style={{ flex: '10' }}>
            <p className={styles.generatePageTitle}>
              Select the assessments to be included in the report
              <p className={styles.generatePageSubtitle}>
                The results of your CRA of each assessment will be included
              </p>
            </p>
          </div>
          <div style={{ flex: '1' }}>
            <Badge
              sx={{
                '& .MuiBadge-badge': {
                  right: -20,
                  top: 50,
                  color: 'White',
                  backgroundColor: '#1C5F9A',
                  fontSize: 20,
                  width: 35,
                  height: 35,
                  opacity: 1
                }
              }}
              badgeContent={counter}
            ></Badge>
          </div>
          <div style={{ flex: '1' }}>
            <button
              onClick={counter <= 0 ? openGenerateError : openGenerate}
              className={styles.btnGenerateReport}
            >
              Generate Report
            </button>
          </div>
        </div>

        <Modal open={generate} disableBackdropClick>
          <Box className={styles.customModal}>
            <Box sx={{ height: '57px', backgroundColor: '#363636' }}>
              <Close
                className={styles.customCloseIcon}
                onClick={closeGenerate}
              />
            </Box>
            <Box sx={{ my: '50px' }}>
              <p>Are you sure you would like to proceed?</p>
              <p>This action cannot be undone</p>
            </Box>

            <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: '400px',
                ml: '234px'
              }}
            >
              <Link to='/'>
                <button
                  className={styles.customModalButtonBlue}
                  onClick={onGenerate}
                >
                  Yes
                </button>
              </Link>
              <button
                className={styles.customModalButtonWhite}
                onClick={closeGenerate}
              >
                No
              </button>
            </Box>
          </Box>
        </Modal>
        <Dialog open={generateCancel} maxWidth='md' fullWidth={true}>
          <Box sx={{ height: '57px', backgroundColor: '#363636' }}>
            <Close
              className={styles.customCloseIcon}
              onClick={closeGenerateError}
            />
          </Box>
          <DialogTitle sx={{ fontWeight: '600', textAlign: 'center' }}>
            No Assessment Selected
          </DialogTitle>
          <DialogContent sx={{ textAlign: 'center' }}>
            <DialogContentText id='alert-dialog-description'>
              Please select at least one assessment to generate a report
            </DialogContentText>
          </DialogContent>
          <DialogActions
            sx={{ justifyContent: 'center', marginBottom: '20px' }}
          >
            <Button
              onClick={closeGenerateError}
              variant='contained'
              sx={{ width: '100px' }}
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <Row>
          <CustomDropdownList
            counter={(n) => likeDislikeMutate(n)}
            assList={updateAssessmentList}
            title='Semester 1, 2022'
            data={demoData2022}
          />
          <CustomDropdownList
            counter={(n) => likeDislikeMutate(n)}
            assList={updateAssessmentList}
            title='Semester 2, 2021'
            data={demoData2021}
          />
        </Row>
  
    </Layout>
  );
}
