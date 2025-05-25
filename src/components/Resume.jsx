import { Link } from "react-router-dom";
import '../style/resume.css';
import {
  Document,
  Page,
  Text,
  StyleSheet,
  PDFDownloadLink,
  Image 
} from '@react-pdf/renderer';

const Resume = ({
  image,
  firstname,
  surname,
  city,
  country,
  pincode,
  phone,
  email,
  linkedin,
  github,
  summary,
  skill,
  companyname,
  date,
  domain,
  projectname,
  detail,
  language,
  iname,
  idate,
  idomain,
  project,
}) => {

  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontSize: 12,
      fontFamily: 'Helvetica',
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 24,
      marginBottom: 12,
      fontWeight: 'bold',
      color: '#2c3e50',
      textAlign: 'center',
    },
    sectionHeader: {
      fontSize: 16,
      marginTop: 10,
      marginBottom: 6,
      fontWeight: 'bold',
      color: '#34495e',
      borderBottomWidth: 1,
      borderBottomColor: '#bdc3c7',
      paddingBottom: 4,
    },
    text: {
      marginBottom: 4,
      color: '#4a4a4a',
    },
    link: {
      color: '#2980b9',
      textDecoration: 'underline',
    },
    containerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 6,
    },
  });

  const ResumeDocument = (props) => (
    <Document>
      <Page style={styles.page}>
        {image && (
          <Image
            src={image}
            style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
          />
        )}
        <Text style={styles.header}>{props.firstname} {props.surname}</Text>
        <Text style={styles.sectionHeader}>Contact</Text>
        <Text style={styles.text}>{props.city} | {props.pincode} | {props.country}</Text>
        <Text style={styles.text}>{props.phone}</Text>
        <Text style={styles.text}>{props.email}</Text>
        <Text style={[styles.text, styles.link]}>{props.linkedin}</Text>
        <Text style={[styles.text, styles.link]}>{props.github}</Text>

        <Text style={styles.sectionHeader}>Summary</Text>
        <Text style={styles.text}>{props.summary}</Text>

        <Text style={styles.sectionHeader}>Skills</Text>
        <Text style={styles.text}>{props.skill}</Text>

        <Text style={styles.sectionHeader}>Experience</Text>
        <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>{props.companyname}</Text> | {props.date}</Text>
        <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>{props.domain}</Text></Text>
        <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>{props.projectname}</Text></Text>
        <Text style={styles.text}>{props.detail}</Text>

        <Text style={styles.sectionHeader}>Internship</Text>
        <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>{props.iname}</Text> | {props.idomain} | {props.idate}</Text>

        <Text style={styles.sectionHeader}>Project Work</Text>
        <Text style={styles.text}><Text style={{ fontWeight: 'bold' }}>{props.project}</Text> | {props.idomain} | {props.idate}</Text>

        <Text style={styles.sectionHeader}>Languages</Text>
        <Text style={styles.text}>{props.language}</Text>
      </Page>
    </Document>
  );

  return (
    <>
      {/* Resume Container */}
      <div className="min-h-screen w-full bg-white flex flex-col lg:flex-row justify-center items-center select-none px-4 py-6">
        <div className="w-full max-w-4xl bg-rose-50 shadow-md">
          {/* Header */}
          <div className="flex justify-center items-center py-4">
            <h2 className="text-4xl text-slate-700 font-medium">Resume</h2>
          </div>

          {/* Inner Layout */}
          <div className="flex flex-col lg:flex-row w-full gap-4 px-4 py-6">
            {/* Left Panel */}
            <div className="w-full lg:w-1/3 space-y-6">
              {image && (
                <div className="flex justify-center">
                  <img src={image} alt="user" className="h-24 w-24 rounded-full border-2 border-rose-300" />
                </div>
              )}

              <div className="border-t border-gray-300" />
              <h3 className="text-lg font-bold text-center">Contact</h3>
              <div className="text-sm text-gray-600 text-center space-y-1">
                <p>{city} | {pincode} | {country}</p>
                <p>{phone}</p>
                <p>{email}</p>
                <p className="text-blue-600"><Link to={linkedin}>{linkedin}</Link></p>
                <p className="text-blue-600"><Link to={github}>{github}</Link></p>
              </div>

              <div className="border-t border-gray-300" />
              <h3 className="text-lg font-bold text-center">Skills</h3>
              <p className="text-sm text-gray-600 text-center">{skill}</p>

              <div className="border-t border-gray-300" />
              <h3 className="text-lg font-bold text-center">Language</h3>
              <p className="text-sm text-gray-600 text-center">{language}</p>
            </div>

            {/* Right Panel */}
            <div className="w-full lg:w-2/3 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-center lg:text-left">Summary</h3>
                <p className="text-sm text-gray-600">{summary}</p>
              </div>

              <div className="border-t border-gray-300" />
              <div>
                <h3 className="text-lg font-bold text-center lg:text-left">Experience</h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p><strong>{companyname}</strong> | {date}</p>
                  <p><strong>{domain}</strong></p>
                  <p><strong>{projectname}</strong></p>
                  <p>{detail}</p>
                </div>
              </div>

              <div className="border-t border-gray-300" />
              <div>
                <h3 className="text-lg font-bold text-center lg:text-left">Internship</h3>
                <p className="text-sm text-gray-600"><strong>{iname}</strong> | {idomain} | {idate}</p>
              </div>

              <div className="border-t border-gray-300" />
              <div>
                <h3 className="text-lg font-bold text-center lg:text-left">Project Work</h3>
                <p className="text-sm text-gray-600"><strong>{project}</strong> | {idomain} | {idate}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Download */}
      <div className="w-full flex justify-center py-4">
        <PDFDownloadLink
          id="resumedownload"
          document={<ResumeDocument
            image={image}
            firstname={firstname}
            surname={surname}
            city={city}
            country={country}
            pincode={pincode}
            phone={phone}
            email={email}
            linkedin={linkedin}
            github={github}
            skill={skill}
            language={language}
            summary={summary}
            companyname={companyname}
            date={date}
            domain={domain}
            projectname={projectname}
            detail={detail}
            iname={iname}
            idate={idate}
            idomain={idomain}
            project={project}
          />}
          fileName={`${firstname}_${surname}_Resume.pdf`}
        >
          {({ loading }) => (
            <button className="px-6 py-2 border border-gray-400 rounded-md text-slate-700 hover:bg-slate-100 transition-all">
              {loading ? 'Preparing document...' : 'Download Resume PDF'}
            </button>
          )}
        </PDFDownloadLink>
      </div>

      {/* Back Button */}
      <div className="w-full flex justify-center pb-6">
        <Link to="/project" className="text-slate-600 hover:text-slate-500 text-base font-medium border border-slate-400 px-6 py-2 rounded-full hover:bg-slate-100 transition">
          Back
        </Link>
      </div>
    </>
  );
};

export default Resume;
