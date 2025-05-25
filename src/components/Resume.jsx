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
      <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>{props.companyname}</Text> | {props.date}</Text>
      <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>{props.domain}</Text></Text>
      <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>{props.projectname}</Text></Text>
      <Text style={styles.text}>{props.detail}</Text>

      <Text style={styles.sectionHeader}>Internship</Text>
      <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>{props.iname}</Text> | {props.idomain} | {props.idate}</Text>

      <Text style={styles.sectionHeader}>Project Work</Text>
      <Text style={styles.text}><Text style={{fontWeight: 'bold'}}>{props.project}</Text> | {props.idomain} | {props.idate}</Text>

      <Text style={styles.sectionHeader}>Languages</Text>
      <Text style={styles.text}>{props.language}</Text>
    </Page>
  </Document>
);


  return (
    <>

      {/* Resume Preview Section */}
      <div className="min-h-[1000px] w-full bg-white flex flex-col lg:flex-row justify-center items-center select-none">
        <div
          className="w-[95%] sm:w-[90%] md:w-[600px] h-[900px] bg-rose-50 shadow-md mt-5 lg:mt-0"
        >
          <div className="h-[80px] flex justify-center items-center">
            <h2 className="text-4xl text-slate-700 font-medium">Resume</h2>
          </div>
          <div className="h-[820px] w-full">
            {/* Name Header */}
            <div className="h-[70px] w-full flex justify-center">
              <div className="h-[70px] w-[90%] md:w-[500px] bg-indigo-600 flex justify-center items-center">
                <h1 className="text-3xl text-white font-bold">
                  {firstname} {surname}
                </h1>
              </div>
            </div>

            {/* Content Rows */}
            <div className="h-[710px] w-full flex flex-col lg:flex-row justify-center pt-[40px] gap-[20px]">
              {/* Left Side */}
              <div className="h-[710px] w-full max-w-[230px] mx-auto">
                <div className="h-[100px] w-full pt-[10px] flex justify-center">
                  {image && (
                    <img
                      src={image}
                      alt="user"
                      className="h-[100px] w-[100px] rounded-full border-[2px] border-rose-300"
                    />
                  )}
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">
                  ___________________________
                </div>
                {/* Contact */}
                <div className="h-[30px] w-full flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Contact</p>
                </div>
                <div className="w-full grid place-content-center">
                  <p className="text-sm text-gray-600 font-normal pt-[5px]">
                    {city} | {pincode} | {country}
                  </p>
                  <p className="text-sm text-gray-600 font-normal pt-[5px]">
                    {phone}
                  </p>
                  <p className="text-sm text-gray-600 font-normal pt-[5px]">
                    {email}
                  </p>
                  <p className="text-sm text-blue-600 font-normal pt-[5px]">
                    <Link to={linkedin}>{linkedin}</Link>
                  </p>
                  <p className="text-sm text-blue-600 font-normal pt-[5px]">
                    <Link to={github}>{github}</Link>
                  </p>
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">
                  ___________________________
                </div>
                {/* Skill */}
                <div className="h-[30px] w-full flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Skills</p>
                </div>
                <div className="w-full flex justify-center">
                  <div className="w-[80px] pl-1 grid">
                    <p className="text-sm text-gray-600 font-normal pt-[5px]">
                      {skill}
                    </p>
                  </div>
                </div>

                <div className="h-[30px] w-full flex justify-center items-center">
                  ___________________________
                </div>
                {/* Language */}
                <div className="h-[30px] w-full flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Language</p>
                </div>
                <div className="w-full flex justify-center">
                  <div className="w-[80px] pl-1 grid">
                    <p className="text-sm text-gray-600 font-normal pt-[5px]">
                      {language}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side Placeholder */}
              <div className="h-[710px] w-full max-w-[391px]">
                {/* Summary */}
                <div className="h-[30px] w-[391px] flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Summary</p>
                </div>
                <div className="w-[391px] pt-[10px] grid place-content-center">
                  <div className="w-[300px]">
                    <p className="text-sm text-gray-600">{summary}</p>
                  </div>
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">
                  _____________________________________________
                </div>

                {/* Experience */}
                <div className="h-[30px] w-[391px] flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Experience</p>
                </div>
                <div className="pt-[10px] grid place-content-center">
                  <div className="w-[300px]">
                    <p className="text-sm text-gray-600 pt-2">
                      <strong>{companyname}</strong> | {date}
                    </p>
                    <p className="text-sm text-gray-600 pt-3">
                      <strong>{domain}</strong>
                    </p>
                    <p className="text-sm text-gray-600 pt-3">
                      <strong>{projectname}</strong>
                    </p>
                    <p className="text-sm text-gray-600 pt-3">{detail}</p>
                  </div>
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">
                  _____________________________________________
                </div>

                {/* Internship */}
                <div className="h-[30px] w-[391px] flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Internship</p>
                </div>
                <div className="pt-[10px] grid place-content-center">
                  <div className="w-[300px]">
                    <p className="text-sm text-gray-600 pt-2">
                      <strong>{iname}</strong> | {idomain} | {idate}
                    </p>
                  </div>
                </div>
                <div className="h-[30px] w-full flex justify-center items-center">
                  _____________________________________________
                </div>

                {/* Project Work */}
                <div className="h-[30px] w-[391px] flex justify-center items-center">
                  <p className="text-lg text-black font-bold">Project Work</p>
                </div>
                <div className="pt-[10px] grid place-content-center">
                  <div className="w-[300px]">
                    <p className="text-sm text-gray-600 pt-2">
                      <strong>{project}</strong> | {idomain} | {idate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Button */}
  <div className="w-full h-[50px] flex justify-center items-center">
      <PDFDownloadLink id="resumedownload"
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
  {({ loading }) => (loading ? 'Preparing document...' : 'Download Resume PDF')}
</PDFDownloadLink>
      </div>

      {/* Buttons */}
<div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 md:gap-[830px] mt-4 p-2">
  <button id="resumebutton" className="w-[200px] h-[45px] border-0 outline-0 rounded-full bg-transparent hover:scale-105 duration-300 transition-all ease-in-out cursor-pointer">
    <Link to='/project' className="text-[18px] text-slate-600 font-medium hover:text-slate-500">Back</Link>
  </button>
</div>
    </>
  );
};

export default Resume;
