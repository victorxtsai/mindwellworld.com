import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Footer from '../components/Footer';
import Header from '../components/Header';

const faqs = [
  {
    question: "1. Information We Collect",
    answer: (
      <>
        <p className="mb-4">
          We collect information (i) that you provide directly, (ii) that is automatically generated or inferred from your use of the Service, and (iii) that we obtain from third-party sources.
        </p>
  
        <p className="mb-2 font-semibold">1.1. Information You Provide To Us</p>
        <p className="mb-4">
          When you use our Service or communicate with us, you may voluntarily provide certain personal information. This may include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Account Data:</strong> When you create or use a Mindwell World account to access our Service, we may collect your contact information (e.g., name, email address), account credentials, and other information you provide during registration. If you register or log into our Service via a third party (such as Google or Apple), that service may send certain account information to us.
          </li>
          <li>
            <strong>Payment Data:</strong> When you make transactions through our Service, we may collect payment and transaction information, such as billing address and payment method details. Payment processing is usually handled by third-party payment processors, which may receive and store your payment data under their own privacy policies.
          </li>
          <li>
            <strong>Contact and Communications Data:</strong> When you communicate with us (e.g., via email or in-app support), we may collect contact information (e.g., name, email address) and any additional information you voluntarily provide in your communications.
          </li>
          <li>
            <strong>User Content Data:</strong> When you use our Service, we may collect personal information included in your inputs, such as your daily journal entries, chatbot interactions, media (e.g., photos or audio clips), and mood ratings.
          </li>
          <li>
            <strong>Feedback Data:</strong> When you provide feedback, suggestions, or other comments about our Service (e.g., surveys, emails, in-app forms, or social media), we may collect and store the information you share. This may include details about your experience, opinions on new features, or comments on how we can improve.
          </li>
          <li>
            <strong>Applicant Data:</strong> When you apply for a job with us, we may collect personal information such as your contact details, resume/CV, education and work history, and visa status.
          </li>
        </ul>
  
        <p className="mb-2 font-semibold">1.2. Information Automatically Provided to Us</p>
        <p className="mb-4">
          When you use or interact with our Service, your device typically provides us with certain information automatically. We use this data to understand how our Service is being used, improve performance, and enhance your experience. This information may be collected through technologies such as cookies, web beacons, local storage, and clear GIFs. The information may include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Device Data:</strong> Technical information including your device type, browser type and version, operating system, application version, and device features. We may also collect unique device identifiers, push notification tokens, or crash data for debugging.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about your use of the Service—such as pages or screens you view, date and time of your visit, duration of visits, browsing history, search history, traffic data, and other data related to your interaction with the Service.
          </li>
          <li>
            <strong>Inferred Location Data:</strong> IP address information, which may let us approximate your country-level, state-level, or city-level location.
          </li>
        </ul>
  
        <p className="mb-2 font-semibold">1.3. Information From Third Parties</p>
        <p className="mb-0">
          When you use our Service or communicate with us via third-party platforms or services, we may receive certain personal information from those parties. We use this information to facilitate your login, improve our Service, or provide additional features. The information we collect and how we use it will depend on the nature of your interaction with the third-party service.
        </p>
      </>
    )
  },  
  {
    question: "2. How We Use Your Information",
    answer: (
      <>
        <p className="mb-2 font-semibold">2.1. General Ways We Use Your Information</p>
        <p className="mb-4">
          We may use your data in the following ways:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>To provide, maintain, develop, and improve our Service:</strong> We may use your data to enhance our features, troubleshoot issues, conduct research, and ensure our offerings remain helpful and relevant.
          </li>
          <li>
            <strong>To make our Service more relevant and personalized for you:</strong> We may use your data to identify trends and tailor recommendations, insights, and content that best match your interests or goals. We may use your data to generate AI-driven insights and for better context in AI interactions.
          </li>
          <li>
            <strong>To comply with our legal obligations:</strong> We may process your data to meet regulatory and compliance requirements, cooperate with law enforcement, or fulfill other legal duties.
          </li>
          <li>
            <strong>To ensure the security and integrity of our Service:</strong> We may use your data to protect against fraudulent activity, enforce our terms, and safeguard user accounts and information.
          </li>
          <li>
            <strong>To provide support and assistance in relation to our Service:</strong> We may use your data to respond to your requests, resolve technical issues, and offer user support.
          </li>
          <li>
            <strong>To process payments for our Service:</strong> We may use your payment details and related information to complete transactions, manage subscriptions, and handle refunds if necessary.
          </li>
          <li>
            <strong>To process job applications:</strong> We may use applicant data to evaluate qualifications, communicate with candidates, and facilitate our hiring process.
          </li>
        </ul>
  
        <p className="mb-2 font-semibold">2.2. Specific Ways We Use Your Information</p>
        <p className="mb-4">
          We may use the following data in these ways:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <strong>Account Data:</strong> We may use your account information (e.g., name, email, login credentials) to create, authenticate, and manage your account, as well as to communicate with you about updates, security alerts, and important notices.
          </li>
          <li>
            <strong>Payment Data:</strong> We may use your payment and transaction information to process purchases, verify billing details, and fulfill financial obligations (e.g., invoices, refunds, or subscription management). We may also use this data for fraud detection and to meet applicable legal or regulatory requirements.
          </li>
          <li>
            <strong>User Content Data:</strong> We may use the content you voluntarily provide—such as daily journal entries, chatbot messages, uploaded media, and mood logs—to personalize your experience, deliver insights or recommendations (e.g., recognizing patterns over time), and help you track your progress. We may also use this data to refine features (e.g., AI models) and improve the quality of our Service. We may feed your journal entries, mood logs, voice memos, images/videos, and chatbot messages into an AI system to summarize and create context. This context is then used by a third-party LLM to power the chatbot and provide tailored responses. We may also analyze this data to improve the Service's functionality.
          </li>
          <li>
            <strong>Feedback Data:</strong> We may use feedback, suggestions, and comments you provide to understand user needs and preferences, resolve issues, and guide future improvements or new features. We may contact you for clarification on your feedback or provide information regarding product updates.
          </li>
          <li>
            <strong>Applicant Data:</strong> We may use your resume/CV, contact details, and other job-related information to evaluate your qualifications, communicate with you regarding your application, and maintain records related to our recruitment activities.
          </li>
          <li>
            <strong>Device Data:</strong> We may use information such as device type, operating system, app version, and unique device identifiers to optimize our Service for different platforms, diagnose technical issues, enhance compatibility, and plan future feature developments.
          </li>
          <li>
            <strong>Usage Data:</strong> We may analyze how you interact with our Service—pages visited, features used, and time spent—to enhance user experience, identify popular or underused features, and guide iterative improvements. This helps us tailor the Service to align with your needs and preferences.
          </li>
          <li>
            <strong>Inferred Location Data:</strong> We may use approximate location information (e.g., derived from your IP address) to personalize certain features and content (such as local recommendations or language settings). This also helps us detect and protect against fraudulent or unauthorized use.
          </li>
        </ul>
  
        <p className="mb-2 font-semibold">2.3. We Do Not Use Your Data in the Following Ways</p>
        <ul className="list-disc pl-6 mb-0">
          <li>
            We do <strong>not</strong> sell your data to third parties. We do not sell, rent, or lease your personal information to third parties for commercial purposes.
          </li>
          <li>
            We do <strong>not</strong> publish, broadcast, or otherwise publicly disclose personal content you store or create within our app.
          </li>
        </ul>
      </>
    )
  },  
  {
    question: "3. Security of Your Information",
    answer: (
      <>
        <p className="mb-2 font-semibold">3.1. Storing Your Data Locally</p>
        <p className="mb-4">
          As of today, data including your journal entries may be stored locally on your device without end-to-end encryption. Treat your device like a physical journal and maintain proper security (including not misplacing it) to prevent unauthorized access. Although a password or login may protect your account within the app, skilled attackers could theoretically access local files by bypassing your device's security. In the future, we may add the ability to encrypt local data.
        </p>
  
        <p className="mb-2 font-semibold">3.2. Transmitting Your Data to Servers</p>
        <p className="mb-4">
          When data is sent to our cloud infrastructure (e.g., for backups, analytics, or AI processing), we rely on industry-standard encryption (such as HTTPS/TLS) provided by our third-party hosting or service providers. This helps ensure that no unauthorized parties can intercept or read your data during transmission.
        </p>
  
        <p className="mb-2 font-semibold">3.3. Storing Your Data on the Cloud</p>
        <p className="mb-0">
          We store data “as is” in our third-party cloud infrastructure or similar serverless environments, relying on the provider’s built-in security features to protect it. On rare occasions, we may decrypt certain data in a secure environment to conduct analytics or AI-related processing. This decryption process is strictly controlled, and only authorized systems or personnel can access decrypted information. We expect to primarily use AI to analyze, access, and process the information we collect.
        </p>
      </>
    ),
  },
  {
    question: "4. Sharing of Your Information",
    answer: (
      <>
        <p className="mb-4">
          We do <strong>not</strong> sell your personal information to third parties. We only share your personal information under the circumstances described below:
        </p>
  
        <p className="mb-2 font-semibold">With Our Contracted Vendors, Service Providers, and Consultants</p>
        <p className="mb-4">
          We may share your personal information with companies that help us operate or improve our Service. This includes data hosting providers, payment processors, analytics tools, and security vendors. We only provide information to the extent necessary for them to perform their functions under appropriate confidentiality and security obligations.
        </p>
  
        <p className="mb-2 font-semibold">With AI/LLM Providers</p>
        <p className="mb-4">
          In order to deliver our chatbot features and personalized insights, we may use third-party large language model (LLM) services. Your user-generated content—such as journal entries, chatbot messages, and mood logs—may be shared as context with these AI providers so they can generate relevant responses and suggestions. We strive to limit the amount of personally identifiable information in these prompts and require that these providers maintain confidentiality and adhere to robust security measures. We do not grant these providers independent rights to use your information for purposes beyond assisting our Service.
        </p>
  
        <p className="mb-2 font-semibold">In Connection with Business Transfers</p>
        <p className="mb-4">
          We may share or transfer your personal information as part of a potential or actual merger, acquisition, financing, bankruptcy, dissolution, reorganization, or similar transaction or proceeding involving the sale or transfer of all or a portion of our business or assets. Where required by law, we will use reasonable efforts to notify you of any transfer of personal information to an unaffiliated third party and/or give you the option to opt out of the data transfer where possible.
        </p>
  
        <p className="mb-2 font-semibold">To Comply with Our Legal Obligations</p>
        <p className="mb-4">
          We may disclose your personal information if required to do so by law or in response to a valid legal request. This can include:
          <ul className="list-disc pl-6 mt-2">
            <li>Complying with applicable laws, regulations, subpoenas, or court orders</li>
            <li>Protecting the rights, property, and safety of Mindwell World, our users, staff, or others</li>
            <li>Enforcing our agreements, policies, and terms of service</li>
            <li>Responding to an emergency if we believe doing so is in good faith and required to protect personal safety</li>
          </ul>
        </p>
  
        <p className="mb-2 font-semibold">With Our Related Companies</p>
        <p className="mb-4">
          We may share personal information with our parent company, subsidiaries, or other affiliates where this is necessary for customer support, technical operations, or other uses consistent with this Privacy Policy. Any such sharing is subject to strict confidentiality and security requirements.
        </p>
  
        <p className="mb-2 font-semibold">Anonymized and Aggregated Data</p>
        <p className="mb-4">
          We may also create and share anonymized, aggregated, or de-identified usage data with our affiliated companies and third parties to help us analyze trends, gauge user engagement, or improve our Service. For example, we may publish aggregated insights (e.g., total number of users or how many people tracked their mood daily) that cannot be used to identify any individual.
        </p>
  
        <p className="mb-2 font-semibold">Important Note</p>
        <p className="mb-0">
          While we use AI and analytics tools to scan or process user data for personalization, our employees generally do not access or read personal data unless it is necessary for resolving technical issues, ensuring compliance with the law, or verifying the quality and safety of AI-generated recommendations. In such rare cases, we implement strict access controls and confidentiality protocols to safeguard your information.
        </p>
      </>
    )
  },
  {
    question: "5. Your Rights",
    answer: (
      <>
        <p className="mb-4">
          Depending on applicable data protection legislation, under certain circumstances, you may have the following rights concerning your personal data:
        </p>
  
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Access:</strong> You can request access to the personal data we hold about you and obtain a copy of such data in a commonly used electronic format.</li>
          <li><strong>Correction/Update:</strong> You can request that we correct or update any inaccuracies or incomplete information in your personal data.</li>
          <li><strong>Deletion:</strong> You can request that we delete your personal data, subject to certain exceptions (e.g., where we have a legal obligation to retain it).</li>
          <li><strong>Restriction of Processing:</strong> You can request that we limit or restrict the processing of your personal data in certain circumstances.</li>
          <li><strong>Objection:</strong> Where applicable, you may object to the processing of your personal data on grounds relating to your particular situation or if you no longer wish to receive marketing communications.</li>
          <li><strong>Portability:</strong> Where required by law, you may request that your personal data be provided to you or to another organization in a structured, commonly used, and machine-readable format.</li>
        </ul>
  
        <p className="mb-4">
          <strong>How to Exercise Your Rights:</strong> If you would like to exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:support@mindwell.io"
            className="text-indigo-400 underline hover:text-indigo-300 transition-colors duration-200"
          >
            support@mindwell.io
          </a>. We will respond to your request in accordance with applicable data protection laws. Please note that we may ask you to verify your identity before taking further action on your request.
        </p>
  
        <p className="mb-2 font-semibold">Data Deletion Request:</p>
        <p className="mb-0">
          If you would like to request the deletion of your data, including any personal information associated with your account, please contact us at{" "}
          <a
            href="mailto:support@mindwell.io"
            className="text-indigo-400 underline hover:text-indigo-300 transition-colors duration-200"
          >
            support@mindwell.io
          </a>. We will take reasonable steps to remove your personal data from our systems unless we need to keep it for legitimate business or legal reasons.
        </p>
      </>
    )
  },  
  {
    question: "6. Changes to This Privacy Policy",
    answer: (
      <>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. If we make significant changes, we may notify you by email (using the address you provided) or by prominently posting a notice on our website or app prior to the change becoming effective.
        </p>
        <p className="mb-0">
          We encourage you to review this Privacy Policy periodically to stay informed about how we protect your data. Your continued use of our Service after any modification to this Privacy Policy will constitute your acceptance of such changes.
        </p>
      </>
    )
  },  
  {
    question: "7. Disclaimer",
    answer: (
      <>
        <p className="mb-4">
          The guidance, insights, or suggestions provided by our Service or any related features are for informational and self-improvement purposes only and are not intended to replace professional medical advice, diagnosis, or treatment. They do not replace professional medical or psychological advice. Always seek the advice of a qualified health provider with any questions you may have regarding a medical or mental health condition.
        </p>
        <p className="mb-0">
          Mindwell World is not responsible for the results of any decisions made based on the information provided by our Service. Use of the Service is at your own discretion and risk.
        </p>
      </>
    )
  },  
  {
    question: "8. Contact Us",
    answer: (
      <>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or anything else, please don’t hesitate to message us on{" "}
          <a
            href="https://x.com/MindwellWorld"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 underline hover:text-indigo-300 transition-colors duration-200"
          >
            X (Twitter)
          </a>.
          In fact, we prefer that you contact us on social media so that our answers and responses are public.
        </p>
        <p className="mb-0">
          You can also reach us by email at:{" "}
          <a
            href="mailto:support@mindwell.io"
            className="text-indigo-400 underline hover:text-indigo-300 transition-colors duration-200"
          >
            support@mindwell.io
          </a>
        </p>
      </>
    )
  },
]

export default function Privacy() {
  return (
    <div className="bg-gradient-to-br from-[#2F52E0] via-[#000000] to-[#000000]">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Privacy Policy</h2>
          <div className="mt-10 text-base/7 text-gray-300 space-y-4">
            <p>
              Introduction
            </p>
            <p>
              This Privacy Policy explains how we, Mindwell World (“Mindwell,” “our,” “us,” or “we”), collect, use, and protect your personal data when you use our websites, products, applications, and other services (collectively, our “Service”).
            </p>
            <p>
            Our offerings include a journaling app, mood tracking tools, and a chatbot feature that uses third-party AI models to provide personalized insights. We collect data you provide such as journal entries, mood logs, and chatbot interactions and use it to personalize your experience and improve our Service. We aim to help you build emotional intelligence, self-awareness, and mindfulness.
            </p>
          </div>
          <dl className="mt-16 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <div className="text-base/7 text-gray-300">{faq.answer}</div>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>

      <Footer />

    </div>
  )
}
