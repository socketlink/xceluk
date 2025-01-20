import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Terms and Conditions | XcelTutors",
  description:
    "Terms and conditions for tutors and clients using the XcelTutors platform.",
};

// Data for the Terms and Conditions sections
const termsAndConditionsData = [
  {
    section: "INFORMATION ABOUT US",
    content: [
      {
        paragraph:
          "1.1 Xceltutors Limited ('Xceltutors', 'we', 'us', 'our') is a private limited company incorporated in England and Wales under company number 16151487, with our registered office located at 2nd Floor College House, 17 King Edwards Road RUISLIP London HA4 7AE, UNITED KINGDOM",
      },
      {
        paragraph:
          "1.2 If you have any questions regarding these Terms, our services, or any other inquiries, please contact us at [Contact Number] or via email at joao@xceltutors.com.",
      },
      {
        paragraph:
          "1.3 In accordance with the Data Protection Act 2018 and UK GDPR, Xceltutors is registered with the Information Commissioner’s Office (ICO) under registration number [ICO Registration Number]",
      },
    ],
  },
  {
    section: "OUR PLATFORM",
    content: [
      {
        paragraph:
          "2.1 We operate a platform accessible through our website (the “Platform”), designed to connect individuals seeking tutoring services (each a “Client”) with qualified tutors registered on the Platform (each a “Tutor”). Through the Platform, Clients can arrange and manage tutoring sessions (“Tutor Sessions”) with Tutors.",
      },
    ],
  },
  {
    section: "PLATFORM TERMS OF USE",
    content: [
      {
        paragraph:
          "3.1 By accessing or using our Platform, you agree to be bound by these Terms, along with our Privacy Policy and Cookie Policy, which explain how we handle personal data collected from you and how we use cookies.",
      },
      {
        paragraph:
          "3.2 Your use of the Platform constitutes a binding agreement between you and Xceltutors, governed by these Terms. This agreement is distinct from any separate contract you may form with a Client or Tutor for a Tutor Session.",
      },
      {
        paragraph: "3.3 These Terms apply:",
        subparagraphs: [
          "3.3.1 regardless of how you access the Platform, whether through our website, a mobile application, or other devices; and",
          "3.3.2 to all users of the Platform, including Clients, Tutors, and guests. References to “you” or “your” in these Terms mean you, the user of the Platform, in any capacity—whether as a Client, Tutor, or guest.",
        ],
      },
      {
        paragraph:
          "3.4 Some sections of these Terms are specific to Clients or Tutors, but we encourage all users to read these Terms in full.",
      },
      {
        paragraph:
          "3.5 We reserve the right to update or amend these Terms as our Platform evolves. In the event of significant changes, we will make reasonable efforts to notify you. The date of the last update is displayed at the top of this page.",
      },
      {
        paragraph:
          "3.6 If you do not agree with any updates or amendments to these Terms, you must stop using the Platform immediately.",
      },
      {
        paragraph:
          "3.7 Each time you access or use the Platform, the version of the Terms in effect at that time will govern your use.",
      },
      {
        paragraph:
          "3.8 Any changes to these Terms will not affect any ongoing or pre-existing contract for a Tutor Session between a Client and a Tutor.",
      },
    ],
  },
  {
    section: "HOW TO USE THE PLATFORM",
    content: [
      {
        paragraph:
          "4.1 Clients or potential Clients can use the Platform to search for and browse a range of Tutors based on location, expertise, and experience. Once a suitable Tutor is identified, the Client can submit a booking request (“Booking Request”) through the Platform to arrange a Tutor Session.",
      },
      {
        paragraph:
          "4.2 After submitting a Booking Request, the Client and Tutor can communicate using the Platform’s messaging feature to discuss and finalise the specific details of the Tutor Session.",
      },
      {
        paragraph:
          "4.3 To confirm the arrangement of a Tutor Session, either the Tutor or the Client must submit a booking confirmation through the Platform (“Booking Confirmation”). The Tutor is responsible for ensuring that the Booking Confirmation includes the following details:",
        subparagraphs: [
          "Price of the session",
          "Date and time of the session",
          "Duration of the session",
          "Subject matter of the session (if applicable)",
        ],
      },
    ],
  },
  {
    section: "TUTOR SESSION CONTRACTS",
    content: [
      {
        paragraph:
          "5.1 When a Booking Confirmation is issued by a Tutor, a contract for a Tutor Session is formed between the Client and the Tutor (the “Tutoring Contract”). Each Tutoring Contract incorporates the provisions outlined in paragraphs 4, 5, 6, 7, 8, and 9 of these Terms.",
      },
      {
        paragraph: "5.2 Please note:",
        subparagraphs: [
          "5.2.1 Xceltutors does not directly provide any tutoring services through the Platform;",
          "5.2.2 Our role is limited to providing and maintaining the Platform;",
          "5.2.3 Xceltutors is not a party to any Tutoring Contract formed between a Client and a Tutor;",
          "5.2.4 Xceltutors is not the employer, principal, or agent of any Client or Tutor;",
          "5.2.5 We are not responsible for the syllabus, teaching methods, or content delivered during a Tutor Session. The Tutor is solely responsible for ensuring the accuracy, completeness, and correctness of the subject matter taught.",
        ],
      },
      {
        paragraph:
          "5.3 Tutors may only arrange tutoring services, modify bookings, or cancel Tutor Sessions through the Platform. All Tutoring Contracts are governed by the laws of England and Wales, and the courts of England and Wales will have exclusive jurisdiction over any disputes arising from them. However, Clients retain the right to have disputes or claims heard by the courts in their home jurisdiction if applicable.",
      },
    ],
  },
  {
    section: "FEES",
    content: [
      {
        paragraph:
          "6.1 While we provide general guidelines for Tutor Session pricing, Tutors retain full discretion to set their own hourly rates. The hourly rate will be displayed on the Tutor’s profile and can be reviewed by Clients before submitting a Booking Request.",
      },
      {
        paragraph:
          "6.2 The fee payable by the Client for a Tutor Session (the “Fee”) is determined based on the hourly rate specified in the Tutor’s profile and the duration of the session.",
      },
      {
        paragraph:
          "6.3 Registration on the Platform as a Tutor or Client is free. However, Xceltutors will receive a commission of 15%-25% of the Fee for each Tutor Session (the “Commission”).",
      },
      {
        paragraph:
          "6.4 All payments on the Platform are processed by our payment service provider (the “PSP”), which will apply a 2% processing charge on each Tutor Session Fee.",
      },
      {
        paragraph:
          "6.5 The PSP will collect the Fee on the date the Tutor Session takes place using the payment card details provided by the Client at the time of booking.",
      },
      {
        paragraph:
          "6.6 After collecting the Fee, the PSP will deduct the Commission and its processing charge, then transfer the remaining balance to the Tutor within 48 hours.",
      },
      {
        paragraph:
          "6.7 The Fee does not include any applicable value-added tax (VAT). VAT will be applied to the Commission for each completed Tutor Session, in accordance with applicable tax laws.",
      },
      {
        paragraph:
          "6.8 Tutors are prohibited from accepting or receiving payments directly from Clients or students for Tutor Sessions. All payments must be made via the Platform and processed by the PSP.",
      },
      {
        paragraph:
          "6.9 Tutors must promptly provide us with written details of all time spent delivering Tutor Sessions and any other relevant information we may reasonably request.",
      },
      {
        paragraph:
          "6.10 Tutors will be informed of the applicable Commission rate and PSP charges during registration. We reserve the right to change our Commission rate or the PSP charges from time to time to reflect changes in operating costs. If we do so, we will provide at least 30 days’ notice before implementing any changes. Any updated Commission rates will apply only to Tutor Sessions booked on or after the stated effective date.",
      },
    ],
  },
  {
    section: "CANCELLATION OF TUTOR SESSIONS",
    content: [
      {
        paragraph:
          "7.1 Tutor Sessions can only be cancelled by submitting a cancellation notice through the Platform.",
      },
      {
        paragraph:
          "7.2 If a Client cancels a Tutor Session less than 24 hours before the scheduled start time, or if the Tutor Session does not proceed due to reasons attributable to the Client (e.g., non-attendance without cancellation), the Tutor reserves the right to charge the full Fee. In such cases, the Fee will be charged to the Client on the earlier of: (i) the date the Client cancels the Tutor Session; or (ii) the scheduled date of the Tutor Session, unless the Client is entitled to a statutory cooling-off period as outlined in paragraph 7.5.",
      },
      {
        paragraph:
          "7.3 If a Tutor is unable to attend a Tutor Session due to circumstances beyond their reasonable control, they must make reasonable efforts to notify the Client via the Platform’s messaging service and rearrange the session at the earliest opportunity. If the Tutor Session cannot be rescheduled, the Tutor must cancel the session through the Platform.",
      },
      {
        paragraph:
          "7.4 No Fee will be charged if a Tutor Session is cancelled by either the Tutor or the Client 24 hours or more before the scheduled start time.",
      },
      {
        paragraph:
          "7.5 Clients who are acting as consumers (“Consumer Clients”) have a legal right under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013 to cancel a Tutor Session within 14 days of the Booking Confirmation (“cooling-off period”) without incurring any charges or being required to pay the Fee. However, if the Consumer Client requests a Tutor Session to take place during the cooling-off period, and the Tutor confirms this in the Booking Confirmation, the Consumer Client will be liable to pay the Fee for that Tutor Session in accordance with these Terms. To exercise the right to cancel under the cooling-off period, the Consumer Client must notify both the Tutor and us of their decision to cancel. The easiest method of cancellation is via the Consumer Client’s account on the Platform.",
      },
    ],
  },
  {
    section: "TUTOR TERMS",
    content: [
      {
        paragraph:
          "8.1 This paragraph applies to all users of this Platform who intend to make or have made an application to register as a Tutor. It also applies to Tutors who are currently registered on the Platform.",
      },
      {
        paragraph:
          "8.2 Your application to register as a Tutor must include the following:",
        subparagraphs: [
          "A current Disclosure and Barring Service (DBS) certificate, if you wish to provide tutoring services online;",
          "Your degree certificate, C.V., age, subjects you wish to tutor, and proof of right to work, if applicable;",
          "An acceptable form of photographic identification, such as a passport or driving license. You may also be required to attend an interview at a specified location before your application is processed.",
        ],
      },
      {
        paragraph:
          "8.3 Before a Client can book a Tutor Session with you, you must agree to the terms and conditions of our payment service provider (PSP) by completing a tick-box acceptance during registration.",
      },
      {
        paragraph:
          "8.4 The Tutor agrees to conduct Tutor Sessions with due care, skill, and professionalism, in accordance with these Terms, the Booking Confirmation, and applicable statutory and regulatory standards.",
      },
      {
        paragraph:
          "8.5 The Tutor must take all necessary and appropriate steps to safeguard and protect the interests of the Client and, where applicable, the student or child receiving tutoring services.",
      },
      {
        paragraph:
          "8.6 The Tutor warrants that all information provided during registration—including personal details, qualifications, credentials, references, and any other relevant background information—is true, complete, and accurate at the time of submission and remains so during the Tutor’s registration on the Platform.",
      },
      {
        paragraph: "8.7 The Tutor agrees:",
        subparagraphs: [
          "8.7.1 While registered on this Platform, not to provide any tuition or educational services to a Client registered on the Platform (except for Tutor Sessions booked through the Platform) unless they agree to pay an ‘Introduction Fee’, as outlined in paragraph 8.7.4.",
          "8.7.2 While registered on this Platform, not to provide any tuition or educational services (except for Tutor Sessions booked through the Platform) to any sibling or other relative of a Client, or to any person introduced, directly or indirectly, to the Tutor by a Client unless they agree to pay an ‘Introduction Fee’, as outlined in paragraph 8.7.3.",
          "8.7.3 For a period of 12 months after the later of the following dates: (i) the date the Tutor was last in contact with a Client through the Platform, or (ii) the date of the last Tutor Session booked with a Client, not to provide any tuition or educational services to such Client (except for Tutor Sessions booked through the Platform), or to any sibling, relative, or person introduced, directly or indirectly, by such Client. Introduction Fee:",
          "8.7.3.1 The Tutor agrees to pay an ‘Introduction Fee’ to Xceltutors if, within 12 months of an introduction by Xceltutors, any of the following scenarios occur:",
          "8.7.3.2 The Tutor provides educational services to a Client, or any sibling or relative of the Client, outside the Xceltutors Platform.",
          "8.7.3.3 The Tutor introduces a Client to another Tutor or third party who provides educational services to that Client outside the Xceltutors Platform.",
          "8.7.3.4 The Tutor shares contact information (including emails, phone numbers, social media handles, or online video conferencing IDs) with a Client via the Platform, enabling them to arrange tutoring outside the Platform. Introduction Fee Calculation:",
          "8.7.3.4.1 The Introduction Fee will be calculated as the equivalent of 20 hours’ worth of tutoring at the full rate charged (or to be charged) by the Tutor to the Client.",
        ],
      },
      {
        paragraph:
          "8.8 The Tutor shall indemnify Xceltutors and keep Xceltutors fully and effectively indemnified on demand against any actions, suits, claims, costs, demands, losses, damages, expenses, liabilities, and payments that may be brought against or incurred by Xceltutors, directly or indirectly, in connection with: the provision of a Tutor Session by the Tutor, the Tutor’s use of the Platform, any act or omission by the Tutor, and any breach or failure to comply with these Terms by the Tutor.",
      },
      {
        paragraph:
          "8.9 The Tutor shall be solely responsible for promptly paying all income tax and national insurance contributions related to any charges or payments received from Clients. The Tutor is also responsible for completing and submitting all relevant tax returns, assessments, and information to HM Revenue & Customs concerning such payments.",
      },
      {
        paragraph:
          "8.10 The Tutor agrees to indemnify Xceltutors and keep Xceltutors fully and effectively indemnified on demand against any liability for income tax, national insurance contributions, penalties, and/or interest arising in relation to payments made by Clients to the Tutor for Tutor Sessions or in connection with the Tutor’s use of the Platform. This includes any reasonable costs incurred by Xceltutors in recovering such amounts.",
      },
      {
        paragraph:
          "8.11 The Tutor acknowledges that Xceltutors may receive a commission from any accountancy firm introduced to the Tutor by Xceltutors. However, Xceltutors shall not be held responsible for any advice or services provided by the accountancy firm.",
      },
    ],
  },
  {
    section: "CLIENT TERMS",
    content: [
      {
        paragraph:
          "9.1 This section applies to all users of the Platform who intend to register or have already registered as Clients. It also applies to Clients who are currently registered on the Platform.",
      },
      {
        paragraph:
          "9.2 To submit a Booking Request, you will be automatically registered as a Client and required to provide valid debit or credit card details. These details will be used to process payment for your Tutor Sessions. Additionally, you must confirm your acceptance of the terms and conditions of our payment service provider (PSP) during registration.",
      },
      {
        paragraph:
          "9.3 When you submit a Booking Request, your card will be subject to an authorisation hold to confirm your lesson. If the Tutor cancels the Tutor Session, the authorisation hold will be released, and no payment will be taken.",
      },
      {
        paragraph:
          "9.4 All payments must be processed through the Platform. You agree to notify us immediately if a Tutor requests or accepts payment (in whole or in part) outside the Platform.",
      },
      {
        paragraph:
          "9.5 You agree not to arrange tutoring services with any Tutor outside the Platform for a period of 12 months following the later of: (i) your registration on the Platform, or (ii) the date of your most recent Tutor Session booked through the Platform.",
      },
      {
        paragraph:
          "9.6 While we do interview certain Tutors and ensure that Tutors providing in-person tutoring have a current Disclosure and Barring Service (DBS) certificate and relevant degree qualifications before approving their registration, we do not guarantee that any Tutor is suitably qualified to deliver the services offered through the Platform. Additionally, we do not routinely verify a Tutor’s identity, experience, training, qualifications, or any authorisations and clearances (including DBS) that may be legally required or required by a relevant professional body. Tutors offering online-only sessions are not required to have a DBS check or clearance. However, all online lessons are recorded, and Xceltutors verifies I.D. and interviews Tutors before accepting them onto the Platform.",
      },
      {
        paragraph:
          "9.7 If at any point you have concerns regarding the competence, qualifications, suitability, or performance of a Tutor, you should notify us immediately, and we will investigate the matter accordingly.",
      },
      {
        paragraph:
          "9.8 The Client agrees to indemnify Xceltutors and keep Xceltutors fully and effectively indemnified on demand against any actions, suits, claims, costs, demands, losses, damages, expenses, liabilities, or payments arising from or incurred as a result of any content posted by the Client on the Platform or any improper use of the Platform by the Client.",
      },
    ],
  },
  {
    section: "DISCLAIMERS AND OUR LIABILITY TO YOU",
    content: [
      {
        paragraph:
          "10.1 Nothing in these Terms shall exclude or limit our liability for:",
        subparagraphs: [
          "10.1.1 personal injury or death resulting from our negligence;",
          "10.1.2 fraud or fraudulent misrepresentation;",
          "10.1.3 any breach of the obligations implied by Section 2 of the Supply of Goods and Services Act 1982;",
          "10.1.4 breach of a Client’s legal rights regarding the services available on the Platform, including the right to receive services (from the Tutor or us, as applicable) that are as described and supplied with reasonable skill and care;",
          "10.1.5 any other liability where exclusion or limitation is not permitted by applicable law or regulation.",
        ],
      },
      {
        paragraph: "10.2 We cannot guarantee that the Platform will be:",
        subparagraphs: [
          "10.2.1 compatible with all or any hardware and software you may use;",
          "10.2.2 available at all times or at any specific time; or",
          "10.2.3 accurate and up to date.",
        ],
      },
      {
        paragraph:
          "10.3 We use industry-standard techniques to protect our Platform from bugs, viruses, and attacks, but we cannot guarantee that the Platform will be free from bugs, viruses, or other malicious software. We will not be liable for any loss or damage caused by a virus, distributed denial-of-service attack, or other technologically harmful material that may infect your computer equipment, programs, data, or other proprietary material due to your use of the Platform or your downloading of any content from it or any linked websites.",
      },
      {
        paragraph:
          "10.4 The Tutor is not our employee or agent, and except where expressly stated in these Terms, neither a Tutor nor a Client has the authority to alter or waive any of these Terms or to bind or commit us in any way.",
      },
      {
        paragraph:
          "10.5 While we aim to interview all Tutors before they are permitted to advertise on the Platform, we are not responsible for the actions of Tutors and cannot guarantee the quality of services provided by Tutors. (Clients should ensure that they are present during Tutor Sessions delivered to minors.)",
      },
      {
        paragraph:
          "10.6 The content provided on the Platform is for general information purposes only and is not intended as advice on which you should rely. Although we make reasonable efforts to update the information on the Platform, we make no guarantees that the content is accurate, complete, or up to date.",
      },
      {
        paragraph:
          "10.7 We do not provide tutoring services directly through the Platform, and we make no guarantees or assurances that the tutoring services accessed via the Platform will result in achieving any specific qualification, accreditation, standard, recognition, or goal.",
      },
      {
        paragraph:
          "10.8 We shall be responsible to a Tutor or Client for certain types of loss or damage suffered as a foreseeable result of our breach of these Terms or our negligence (including any breach or negligence by our officers, employees, or agents) that arises directly from our actions. However, we shall not be responsible for:",
        subparagraphs: [
          "10.8.1 any loss or damage that was not an obvious consequence of our breach or that was not contemplated by us and you at the time you accepted these Terms (e.g., indirect, special, or consequential loss or damage);",
          "10.8.2 loss of profits or contracts;",
          "10.8.3 loss of revenue;",
          "10.8.4 loss of business;",
          "10.8.5 loss of goodwill;",
          "10.8.6 business interruption;",
          "10.8.7 wasted management or office time;",
          "10.8.8 loss of anticipated savings;",
          "10.8.9 loss caused by circumstances outside our control;",
          "10.8.10 loss or damage caused by your breach of the Terms;",
          "10.8.11 loss or damage arising directly or indirectly from any act or omission of a Tutor;",
          "10.8.12 loss or damage caused by the Platform being unavailable at any time or for any period;",
          "10.8.13 loss or damage caused by a breach by the Tutor or Client of a Tutoring Contract;",
          "10.8.14 any loss or damage caused to you as a result of browsing the Platform as a guest, whether caused by tort (including negligence), breach of contract, or otherwise.",
        ],
      },
      {
        paragraph:
          "10.9 All terms, conditions, and warranties implied by any applicable law are excluded from these Terms to the fullest extent permitted by law.",
      },
    ],
  },
  {
    section: "ACCESS AND USE OF THE WEBSITE",
    content: [
      {
        paragraph:
          "11.1 You must be 18 years of age or older to register as a Client or Tutor.",
      },
      {
        paragraph:
          "11.2 We grant you a limited, non-exclusive, non-transferable, and revocable licence to access the Platform and its content solely as an end user, subject to these Terms.",
      },
      {
        paragraph:
          "11.3 We do not guarantee that the Platform, or any content on it, will always be available or uninterrupted. Access to the Platform is permitted on a temporary basis, and we may suspend access without notice where required by law or when the Platform is unavailable due to circumstances beyond our control. In other circumstances, we will provide at least 7 days’ notice by posting such notice on the Platform before it becomes unavailable.",
      },
      {
        paragraph:
          "11.4 If you access the Platform via any third-party website, you agree to comply with both these Terms and the terms of use of the third-party website. In case of any conflict between these Terms and those of the third-party website, these Terms will prevail.",
      },
      {
        paragraph:
          "11.5 You agree to only use the Platform for its intended purpose and must not:",
        subparagraphs: [
          "11.5.1 attempt to gain unauthorised access to, make unauthorised alterations to, or introduce malicious code to the Platform by any means;",
          "11.5.2 reverse engineer or decompile (in whole or in part) the Platform or any software available through it;",
          "11.5.3 copy, modify, reproduce, transmit, alter, or distribute any part of the Platform or its content, except as permitted by law;",
          "11.5.4 use the Platform for any unlawful purpose;",
          "11.5.5 use the Platform to commit fraud;",
          "11.5.6 use the Platform to simulate communications from us or any other service/entity for the purpose of collecting identity information, authentication credentials, or other information (‘phishing’); or",
          "11.5.7 use the Platform in any manner that disrupts its operation.",
        ],
      },
      {
        paragraph:
          "11.6 You must not disguise or interfere with the IP address of the device you are using to access the Platform or take any steps to prevent us from identifying the actual IP address of your device while accessing the Platform.",
      },
      {
        paragraph:
          "11.7 The Platform may contain hyperlinks or references to third-party websites. These links are provided for your convenience and information only. We have no control over third-party websites and accept no responsibility for their content, material, or information. The display of a hyperlink or reference does not imply our endorsement of that third party’s website, products, or services. Your use of third-party websites may be subject to their terms and conditions.",
      },
      {
        paragraph:
          "11.8 You are responsible for ensuring that your system is properly set up to access the Platform, including configuring your hardware, software, and internet connection. You should also ensure that you have appropriate and up-to-date virus protection software.",
      },
      {
        paragraph:
          "11.9 You may link to the homepage of the Platform from another website without our prior written consent provided that you:",
        subparagraphs: [
          "11.9.1 link only to the homepage of the Platform at xceltutors.co.uk;",
          "11.9.2 do not create frames or borders around the Platform;",
          "11.9.3 comply with all applicable laws and regulations governing the website or platform you are linking from;",
          "11.9.4 do not imply that we endorse or are associated with your website, product, or service; and",
          "11.9.5 ensure that the website from which you are linking does not contain any inappropriate or offensive content that could harm our reputation.",
        ],
      },
    ],
  },
  {
    section: "YOUR ACCOUNT",
    content: [
      {
        paragraph:
          "12.1 We may restrict access to the entire Platform or certain parts of it to users who have registered with us.",
      },
      {
        paragraph:
          "12.2 By submitting an application to register, you agree and confirm that:",
        subparagraphs: [
          "12.2.1 all the information you have provided is accurate and correct, and you are the person whose details you have submitted;",
          "12.2.2 you are legally capable of entering into a binding agreement with us;",
          "12.2.3 you will use the Platform only as intended under these Terms;",
          "12.2.4 you have provided a current address, telephone number, and email address, and will promptly notify us of any changes to your contact details;",
          "12.2.5 if you are registering as an individual, you are 18 years of age or older and capable of taking responsibility for your actions;",
          "12.2.6 if you are registering on behalf of a company, LLP, or partnership, you are duly authorised to act on its behalf;",
          "12.2.7 you hold a current account with a UK bank or building society; and",
          "12.2.8 you authorise us, at any time, to use any means we deem necessary to verify your identity through third-party information providers. Refer to our Privacy Policy for details on how we may conduct such checks.",
        ],
      },
      {
        paragraph:
          "12.3 You must provide all information requested during the registration process and meet all our eligibility requirements.",
      },
      {
        paragraph:
          "12.4 We reserve the right, at our sole discretion, to refuse your registration on the Platform for any reason.",
      },
      {
        paragraph:
          "12.5 When you register, you will be assigned either a Tutor or Client account (“Your Account”), which will be linked to your email address and protected by a password. You agree to keep your password strictly confidential and must not disclose it to any third party. You should protect it with the same level of care as your bank account or bank card details. Any failure to do so will be at your sole risk and expense.",
      },
      {
        paragraph:
          "12.6 You agree that we are entitled to assume that all correspondence, orders, transfers, and instructions made through Your Account are made by you. You must notify us immediately by email and telephone if you suspect that Your Account has been compromised or that your password is being misused so that we can suspend Your Account.",
      },
      {
        paragraph:
          "12.7 We reserve the right to disable Your Account at any time if, in our reasonable opinion, you have failed to comply with any material provisions of these Terms.",
      },
      {
        paragraph:
          "12.8 You agree to notify us promptly if any information you have provided changes or if you become aware of any errors related to Your Account.",
      },
    ],
  },
  {
    section: "PRIVACY POLICY",
    content: [
      {
        paragraph:
          "13.1 We use and process your registration data and certain other information we collect about you in accordance with our Privacy Policy. For more information, please see our full Privacy Policy.",
      },
      {
        paragraph:
          "13.2 By using this Platform, you consent to such processing and warrant that all data provided by you is accurate, correct, and up to date.",
      },
    ],
  },
  {
    section: "INTELLECTUAL PROPERTY RIGHTS",
    content: [
      {
        paragraph:
          "14.1 Except for User Content (as defined in paragraph 17.1 below), all content published, displayed, or performed on the Platform (including, but not limited to, text, lists, directories, graphics, photographs, images, illustrations, drawings, audio clips, video clips, interactive applications, and search features) (“Platform Content”) is protected by copyright, trademarks, database rights, and other intellectual property rights, which are owned or controlled by us or our third-party licensors and content providers. Except as expressly permitted in these Terms, you do not obtain any right, title, or interest in the Platform Content. Any photos of tutors taken by Xceltutors are the intellectual property of Xceltutors and may not be used outside the Platform without prior written consent.",
      },
      {
        paragraph:
          "14.2 You are not granted any commercial, copying, sale, resale, rental, lending, adaptation, reproduction, distribution, publication, modification, broadcast, or promotional rights for the Platform Content. You may not, without our prior written consent (except as necessary to use the Platform in accordance with these Terms), use the Platform Content for any purpose requiring such rights, systematically extract any Platform Content, or otherwise exploit it commercially. Such use is expressly prohibited and may breach applicable laws.",
      },
    ],
  },
  {
    section: "INTERNATIONAL USE",
    content: [
      {
        paragraph:
          "15.1 This Platform, including its content and services, is provided from the United Kingdom, and all agreements entered into between us and you, as well as between users of the Platform pursuant to these Terms, will be in the English language. If you choose to access the Platform from outside the United Kingdom, you do so at your own risk. We make no representations that the content and services available on the Platform are lawful or available for use in locations outside the United Kingdom.",
      },
    ],
  },
  {
    section: "ADVERTISING",
    content: [
      {
        paragraph:
          "16.1 This Platform may contain advertising. By using the Platform and the services we provide, you agree that:",
        subparagraphs: [
          "16.1.1 we may place advertising on the Platform; and",
          "16.1.2 such advertising may be targeted based on the content of the Platform, user profiles, or other information we hold about you.",
        ],
      },
      {
        paragraph:
          "16.2 The manner, mode, and extent of advertising on the Platform are subject to change without notice.",
      },
      {
        paragraph:
          "16.3 Advertisers are responsible for ensuring that the material they submit for inclusion on the Platform complies with relevant laws and codes. We will not be liable for any errors or inaccuracies in any advertising material.",
      },
    ],
  },
  {
    section: "USER CONDUCT AND CONTENT STANDARDS",
    content: [
      {
        paragraph:
          "17.1 These conduct and content standards apply to any and all images, drawings, videos, audio, text, lists, and other content you upload to, display on, distribute, or otherwise publish through this Platform (“User Content”) and your use of the Platform.",
      },
      {
        paragraph:
          "17.2 You must not upload, post, email, or otherwise transmit any User Content that:",
      },
      {
        paragraph: "17.3 User Content must not:",
        subparagraphs: [
          "17.3.1 be likely to deceive any person, breach any legal duty owed to a third party, or promote any illegal activity;",
          "17.3.2 be used to impersonate any person, misrepresent your identity or affiliation, or give the impression that it originates from us, if this is not the case;",
          "17.3.3 advocate, promote, or assist any unlawful act, such as (by way of example only) copyright infringement or computer misuse.",
        ],
      },
      {
        paragraph:
          "17.4 You must be civil and respectful towards other users. You must not interfere with another user’s enjoyment of the Platform, nor target another user with the intention of causing distress, embarrassment, unwanted attention, or discomfort, or invade their privacy.",
      },
      {
        paragraph:
          "17.5 You must not use the ratings or review functions on the Platform to make personal attacks. Under no circumstances may you attack a person based on race, national origin, ethnicity, religion, gender, sexual orientation, disability, age, or any other form of identification.",
      },
      {
        paragraph:
          "17.6 We reserve the right, but are not obligated, to monitor, moderate, edit, or remove any content you upload to the Platform, and to vet or screen users. However, you acknowledge that you use the Platform at your own risk and are responsible for the information you post.",
      },
      {
        paragraph:
          "17.7 We reserve the right to disclose your identity to any third party who claims that material posted or uploaded by you to the Platform is defamatory, constitutes a violation of their rights (including intellectual property rights or privacy), or is otherwise unlawful.",
      },
    ],
  },
  {
    section: "USER CONTENT LICENCE",
    content: [
      {
        paragraph:
          "18.1 We do not claim ownership rights over your User Content. After uploading your User Content to the Platform, you retain all ownership rights and remain free to use your User Content in any way you choose.",
      },
      {
        paragraph:
          "18.2 By uploading any User Content to or on the Platform, you grant us a perpetual, royalty-free, worldwide, sub-licensable, non-exclusive, irrevocable licence to use, reproduce, distribute, perform, display, or electronically transmit the User Content, whether in its original form or adapted by us, on the Platform and with our associated companies, advertising networks, distribution partners, affiliates, and third-party service providers.",
      },
      {
        paragraph:
          "18.3 You warrant that you have full power and authority to grant the licence described in paragraph 18.2.",
      },
      {
        paragraph:
          "18.4 We may sub-license any or all of the rights granted under paragraph 18.2 to third parties, including our associated companies, advertising networks, distribution partners, affiliates, and third-party service providers.",
      },
      {
        paragraph:
          "18.5 You agree to waive any moral rights in your User Content (including the right to be identified as the author) to enable us to adapt the User Content freely and without restriction.",
      },
      {
        paragraph:
          "18.6 We may display advertisements related to or connected with your User Content and use your User Content for advertising and promotional purposes. You acknowledge and agree that your User Content may appear on websites, advertising networks, distribution partners, affiliates, and third-party service providers.",
      },
    ],
  },
  {
    section: "CONTENT STORAGE",
    content: [
      {
        paragraph:
          "19.1 We reserve the right to establish general practices and limitations regarding the storage of content on the Platform, including but not limited to:",
        subparagraphs: [
          "the maximum number of days that messages, in-mails, postings, or other content will be retained by us on the Platform;",
          "the maximum number of messages or in-mails that may be sent or received by an account; and",
          "the maximum size of messages, in-mails, postings, or other content.",
        ],
      },
      {
        paragraph:
          "19.2 We shall not be responsible or liable for the deletion of, or failure to store, any messages, communications, or other content maintained or transmitted under Your Account or any other part of the Platform.",
      },
    ],
  },
  {
    section: "INTERACTIVE SERVICES",
    content: [
      {
        paragraph:
          "20.1 We may provide interactive services on the Platform, including messaging services and rating and review functions.",
      },
      {
        paragraph:
          "20.2 Any use of our interactive services must comply with our User Conduct and Content Standards set out in paragraph 17.1. We reserve the right to remove any material you upload or post on the Platform if, in our opinion, it does not comply with our User Conduct and Content Standards. Additionally, we reserve the right, without obligation, to monitor disputes between you and other users and/or to restrict, suspend, or close your account if we deem it necessary to enforce the Terms.",
      },
      {
        paragraph:
          "20.3 By submitting messages, information, or other content to the Platform, you acknowledge that such material will be considered non-confidential and free from any similar obligation or restriction. You further acknowledge that content you post on the Platform will be visible to other users, and you agree that any loss or damage incurred as a result of messages, content, or material you upload, post, transmit, or display is solely your responsibility.",
      },
      {
        paragraph:
          "20.4 Clients will have the opportunity to provide feedback to Tutors after a Tutor Session has taken place. Tutors have the discretion to determine whether or not feedback is published on their profile.",
      },
      {
        paragraph:
          "20.5 You are responsible for your interactions with other users of the Platform. We reserve the right to prohibit you from contacting other users through the interactive services or to otherwise limit your use of the interactive services.",
      },
    ],
  },
  {
    section: "SUSPENSION AND TERMINATION",
    content: [
      {
        paragraph:
          "21.1 Failure to comply with these Terms, particularly the User Conduct and Content Standards set out in paragraph 17, constitutes a material breach of the terms under which you are permitted to use the Platform. If, in our opinion, you fail to comply with these Terms, we may take any or all of the following actions at our discretion:",
        subparagraphs: [
          "21.1.1 immediate withdrawal of your right to use the Platform and any services available on it;",
          "21.1.2 immediate removal of any posting or material uploaded or otherwise transmitted by you on the Platform;",
          "21.1.3 legal action against you, including proceedings for reimbursement of any and all damages and costs resulting from the breach;",
          "21.1.4 disclosure of such information to law enforcement authorities or third-party complainants as we reasonably feel is necessary or required;",
          "21.1.5 The responses described in this paragraph are not exhaustive, and we may take any other action we reasonably deem appropriate.",
        ],
      },
      {
        paragraph:
          "21.2 We may, at our sole discretion, suspend or terminate your access to all or part of the Platform, including the content and services available through it, with or without notice. We may also terminate accounts that are inactive for more than six months or where the registration information you provided proves to be false or misleading.",
      },
      {
        paragraph: "21.3 Upon termination or suspension of your account:",
        subparagraphs: [
          "21.3.1 your licence to use the Platform, including its content and services, will immediately terminate;",
          "21.3.2 we may deny you access to your account and any services provided through the Platform; and",
          "21.3.3 we may delete any information or User Content you have stored on the Platform, which may not be retrievable later. You will not be able to recover any data on a deactivated account. Therefore, we recommend that you keep copies of any information or User Content you store on the Platform if you wish to retain permanent access to it.",
        ],
      },
    ],
  },
  {
    section: "COMPLAINTS",
    content: [
      {
        paragraph:
          "22.1 If you have any complaints about the Platform or the conduct of another user, you should contact our Customer Services department at joao@xceltutors.com. We will investigate the complaint and, if possible, attempt to resolve it.",
      },
    ],
  },
  {
    section: "THESE TERMS",
    content: [
      {
        paragraph:
          "23.1 Any words following the terms including, include, in particular, for example, or any similar expression shall be construed as illustrative and shall not limit the sense of the words, description, definition, phrase, or term preceding those terms.",
      },
      {
        paragraph:
          "23.2 These Terms constitute the entire agreement between you and us regarding the use of the Platform and its content and services.",
      },
      {
        paragraph:
          "23.3 If we do not exercise or enforce any legal right or remedy available to us in relation to you or another user of the Platform, this will not be considered a formal waiver of our rights.",
      },
      {
        paragraph:
          "23.4 You are individually bound by these Terms even if you are using the Platform on behalf of a company or other legal entity, regardless of whether that entity has a separate agreement with us.",
      },
      {
        paragraph:
          "23.5 If any provision of these Terms is or becomes illegal, invalid, or unenforceable, that shall not affect the legality, validity, or enforceability of any other provision.",
      },
      {
        paragraph:
          "23.6 A person who is not a party to these Terms has no right under the Contracts (Rights of Third Parties) Act 1999 to enforce any provision of these Terms.",
      },
      {
        paragraph:
          "23.7 These Terms are personal to you, and you may not assign or transfer any of your rights or obligations under them. We may assign our rights and obligations under these Terms.",
      },
      {
        paragraph:
          "23.8 These Terms are governed by the laws of England and Wales, and the courts of England and Wales will have exclusive jurisdiction over any disputes arising from them. However, if you are using the Platform as a consumer, you have the right to have your dispute or claim heard by the courts in your home jurisdiction.",
      },
    ],
  },
];

//terms and conditions for tutors
const termsAndConditionsTutors = [
  {
    section: "THE TUTOR'S CHARGES",
    content: [
      {
        paragraph:
          "5.1 The Tutor's charges for the Tuition are as specified in the Confirmation or as otherwise agreed in writing between Xceltutors and the Tutor.",
      },
      {
        paragraph:
          "5.2 Where Tuition is charged on an hourly basis, charges will be calculated proportionately for any period of less than an hour.",
      },
      {
        paragraph:
          "5.3 Unless otherwise stated in the Confirmation or agreed in writing by Xceltutors, the Tutor's charges for providing the Tuition will be paid by Xceltutors on the later of:",
        subparagraphs: [
          "5.3.1 the last business day of the calendar month in which the relevant Tuition is actually provided; and",
          "5.3.2 the last business day of the calendar month in which Xceltutors is paid or reimbursed by the Client for the Services.",
        ],
      },
      {
        paragraph:
          "5.4 The Tutor's charges are inclusive of any applicable value-added tax (VAT).",
      },
      {
        paragraph:
          "5.5 The Tutor is not entitled to charge Xceltutors for any expenses incurred in the provision of the Tuition, including (but not limited to) travel expenses, hotel costs, subsistence, and any associated expenses, unless such expenses have been agreed and paid for by the Client through Xceltutors.",
      },
      {
        paragraph:
          "5.6 Unless expressly agreed otherwise in writing by Xceltutors, the Tutor shall not receive or accept any payments directly from the Client, the Student, or any other person for sums due to Xceltutors for the provision of Services.",
      },
      {
        paragraph:
          "5.7 The Tutor must promptly provide Xceltutors with written details of all time spent on Tuition during each calendar month, as requested by Xceltutors from time to time. Additionally, the Tutor must provide any other information reasonably requested by Xceltutors relating to the performance of the Tuition. All information provided by the Tutor must be true, complete, and accurate when submitted and must remain so.",
      },
    ],
  },
  {
    section: "CANCELLATION",
    content: [
      {
        paragraph:
          "6.1 If the Tutor is unable to provide Tuition at the scheduled times and dates due to illness, incapacity, or any other reason outside their reasonable control, the Tutor shall provide as much prior written notice to Xceltutors as is reasonably practicable.",
      },
      {
        paragraph:
          "6.2 If the Client cancels the Tuition, Xceltutors will provide as much prior written notice to the Tutor as is reasonably practicable.",
      },
      {
        paragraph:
          "6.3 Where notice is given under paragraph 6.1 or 6.2, both the Tutor and Xceltutors shall make every reasonable effort to agree on a suitable alternative time and date for the postponed Tuition, which should be as soon as reasonably practicable for all parties.",
      },
      {
        paragraph:
          "6.4 If Xceltutors, the Client, and the Tutor are unable to agree on a new time and date for the postponed Tuition within 5 business days of receiving a notice under paragraph 6.1 or 6.2, the Tutor will have no obligation to provide the postponed Tuition, and no charge under paragraph 5 will be made by the Tutor for the postponed Tuition unless: the Client cancelled the Tuition 24 hours or less before the original scheduled time; the Client was not entitled to cancel the Tuition under the Consumer Contracts Regulations 2013; and Xceltutors has been paid by the Client for the postponed Tuition, in which case, the Tutor's charges for the Tuition will be paid by Xceltutors.",
      },
    ],
  },
  {
    section: "STATUS OF TUTOR, OTHER OBLIGATIONS AND EXCLUSIONS",
    content: [
      {
        paragraph:
          "7.1 Subject to paragraph 10.4, Xceltutors shall have no liability for any loss or damage arising directly or indirectly from any act or omission of the Tutor. The Tutor shall indemnify Xceltutors and keep Xceltutors fully and effectively indemnified on demand against any actions, suits, claims, costs, demands, losses, damages, expenses, liabilities, and payments that may be brought against, suffered, or incurred by Xceltutors as a result of or in connection with, directly or indirectly, the provision of the Tuition by the Tutor, any act or omission by the Tutor, and any breach or non-performance of these Terms by the Tutor.",
      },
    ],
  },
];

interface ContentItem {
  paragraph: string;
  subparagraphs?: string[];
}

function renderContent(content: ContentItem[]) {
  return content.map((item: ContentItem, index: number) => (
    <div key={index} className="space-y-4">
      <p>{item.paragraph}</p>
      {item.subparagraphs && (
        <ul className="list-disc pl-6">
          {item.subparagraphs.map((subItem: string, subIndex: number) => (
            <li key={subIndex}>{subItem}</li>
          ))}
        </ul>
      )}
    </div>
  ));
}

export default function TermsAndConditionsPage() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      {/* Context Text Added Here */}
      <p className="mb-6">
        {`Please read these Terms and Conditions carefully
        before using our website and services. These Terms govern your access to
        and use of the XcelTutors platform, including any content,
        functionality, and services offered on or through xceltutors.co.uk (the
        "Platform"). By accessing or using the Platform, you agree to be bound
        by these Terms and our Privacy Policy. If you do not agree to these
        Terms or the Privacy Policy, you must not access or use the Platform.`}
      </p>
      <p className="mb-6">
        These Terms apply to all users of the Platform, including both Clients
        (individuals seeking tutoring services) and Tutors (individuals
        providing tutoring services). Separate sections within these Terms may
        apply specifically to Clients or Tutors, so we encourage you to read the
        entirety of this document.
      </p>

      <h2 className="text-2xl font-bold mb-6">General</h2>
      <Accordion type="single" collapsible className="w-full">
        {termsAndConditionsData.map((item, index) => (
          <AccordionItem key={index} value={item.section}>
            <AccordionTrigger>{item.section}</AccordionTrigger>
            <AccordionContent>{renderContent(item.content)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <h2 className="text-2xl font-bold mb-6 mt-8">For Tutors</h2>
      <Accordion type="single" collapsible className="w-full">
        {termsAndConditionsTutors.map((item, index) => (
          <AccordionItem key={index} value={item.section}>
            <AccordionTrigger>{item.section}</AccordionTrigger>
            <AccordionContent>{renderContent(item.content)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
