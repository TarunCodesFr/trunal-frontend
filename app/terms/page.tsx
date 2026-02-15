'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import FooterSection from '../components/landing/FooterSection';

const TermsOfService = () => {
    const lastUpdated = 'February 8, 2025';

    return (
        <div className="min-h-screen bg-black text-white pt-20">
            <Navbar />

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
                {/* Page Title */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-gray-400">
                        Last Updated:{' '}
                        <span className="font-medium text-gray-300">
                            {lastUpdated}
                        </span>
                    </p>
                </div>

                {/* Important Notice */}
                <div className="bg-amber-500/10 border-l-4 border-amber-400 p-6 mb-12 rounded-r-lg backdrop-blur-sm">
                    <p className="text-amber-300 font-medium mb-2">
                        Important Notice
                    </p>
                    <p className="text-amber-200/80 leading-relaxed">
                        Trunal provides digital services including web
                        development, mobile applications, cloud solutions, and
                        software consulting. These digital services do not
                        qualify for refunds or returns in the same manner as
                        physical goods.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            1. Acceptance of Terms
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                By accessing or using Trunal's services, you
                                agree to be bound by these Terms of Service. If
                                you do not agree to these terms, please do not
                                use our services.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                These terms constitute a legally binding
                                agreement between you (the "Client") and Trunal
                                (the "Company", "we", "us", or "our").
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            2. Services Offered
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Trunal provides the following digital services:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                                <li>Web Application Development</li>
                                <li>
                                    Mobile Application Development (iOS &
                                    Android)
                                </li>
                                <li>Cloud Infrastructure Solutions</li>
                                <li>Software Consulting and Architecture</li>
                                <li>UI/UX Design Services</li>
                                <li>Technical Support and Maintenance</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                All services are{' '}
                                <strong className="text-white">
                                    digital in nature
                                </strong>{' '}
                                and do not involve the sale or delivery of
                                physical products. Once a service is delivered,
                                accessed, or used, it is considered consumed and
                                becomes{' '}
                                <strong className="text-white">
                                    non-returnable and non-refundable
                                </strong>
                                .
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            3. Payment Terms
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                                3.1 Payment Schedule
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Payment terms are agreed upon in the project
                                proposal or contract. Typical payment structures
                                include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                                <li>
                                    Advance payment: 30-50% before project
                                    commencement
                                </li>
                                <li>
                                    Milestone payments: Based on project phases
                                </li>
                                <li>
                                    Final payment: Upon project completion and
                                    delivery
                                </li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                                3.2 Payment Confirmation
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                After successful payment, clients receive a
                                payment confirmation from an official
                                <strong className="text-white">
                                    {' '}
                                    @trunal.in
                                </strong>{' '}
                                email address. This confirmation serves as proof
                                of service availment.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                                3.3 Non-Refundable Payments
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                The following are{' '}
                                <strong className="text-white">
                                    strictly non-refundable
                                </strong>
                                :
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>Advance payments and booking fees</li>
                                <li>
                                    Third-party costs (hosting, domains,
                                    licenses, APIs, tools)
                                </li>
                                <li>Completed work or delivered milestones</li>
                                <li>Consultation and discovery phase fees</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            4. Refund and Cancellation Policy
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                                4.1 Refund Eligibility
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Refunds are considered{' '}
                                <strong className="text-white">
                                    only in rare, unforeseen circumstances
                                </strong>
                                :
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                                <li>
                                    <strong className="text-white">
                                        Non-Delivery:
                                    </strong>{' '}
                                    If Trunal fails to initiate or deliver the
                                    agreed service within the committed timeline
                                    without valid reason
                                </li>
                                {/* <li>
                                    <strong className="text-white">
                                        Service Mismatch:
                                    </strong>{' '}
                                    If a completely different service is
                                    provided compared to what was explicitly
                                    documented and agreed upon
                                </li> */}
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                                4.2 No Refund Scenarios
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Refunds are{' '}
                                <strong className="text-white">
                                    NOT applicable
                                </strong>{' '}
                                when:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                                <li>
                                    Client has accessed, downloaded, or used any
                                    deliverable
                                </li>
                                <li>
                                    Work is delayed due to client-side issues
                                    (content delays, server access, feedback
                                    delays)
                                </li>
                                <li>
                                    Client changes their mind or no longer
                                    requires the service after work has
                                    commenced
                                </li>
                                <li>
                                    Project scope is changed mid-way by the
                                    client
                                </li>
                                <li>
                                    Third-party costs have been incurred
                                    (hosting, licenses, domains, tools, api)
                                </li>
                                <li>
                                    Advance payments or booking fees have been
                                    paid
                                </li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                                4.3 Cancellation Before Work Starts
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                If a project is cancelled before work
                                commencement, we may consider a partial refund
                                after deducting administrative charges
                                (typically 20-30% of advance payment). Once work
                                has started, no refunds will be issued.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            5. Project Scope and Revisions
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We are committed to client satisfaction and
                                provide revisions within the agreed project
                                scope:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                                <li>
                                    Revisions are provided as per the project
                                    agreement (typically 2-3 rounds)
                                </li>
                                <li>
                                    Additional revisions beyond the scope may
                                    incur extra charges
                                </li>
                                <li>
                                    Scope changes requested mid-project are
                                    treated as new requirements and billed
                                    separately
                                </li>
                                <li>
                                    Revisions must be requested within 30 days
                                    of delivery
                                </li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                <strong className="text-white">
                                    Important:
                                </strong>{' '}
                                Revisions are not a substitute for refunds. Our
                                revision policy ensures quality delivery, not
                                unlimited changes.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            6. Client Responsibilities
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Clients are responsible for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>
                                    Providing accurate project requirements and
                                    timely feedback
                                </li>
                                <li>
                                    Supplying necessary content, credentials,
                                    and access when required
                                </li>
                                <li>
                                    Ensuring third-party services (hosting,
                                    domains) are available and accessible
                                </li>
                                <li>
                                    Reviewing and approving deliverables in a
                                    timely manner
                                </li>
                                <li>
                                    Making payments as per the agreed schedule
                                </li>
                                <li>
                                    Maintaining confidentiality of login
                                    credentials and sensitive information
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            7. Intellectual Property Rights
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                                7.1 Ownership Transfer
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Upon full payment, all intellectual property
                                rights for the custom-developed work are
                                transferred to the client. This includes source
                                code, designs, and documentation created
                                specifically for the project.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                                7.2 Retained Rights
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Trunal retains the right to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>
                                    Showcase the project in our portfolio
                                    (unless covered by NDA)
                                </li>
                                <li>
                                    Reuse general methodologies, techniques, and
                                    frameworks
                                </li>
                                <li>
                                    Use anonymized case studies for marketing
                                    purposes
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            8. Confidentiality and Data Protection
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We take data protection seriously and comply
                                with applicable data protection laws:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>
                                    All client data is kept confidential and
                                    secure
                                </li>
                                <li>
                                    We do not share client information with
                                    third parties without consent
                                </li>
                                <li>
                                    Source code and sensitive information are
                                    stored securely
                                </li>
                                <li>
                                    We can sign Non-Disclosure Agreements (NDAs)
                                    when required
                                </li>
                                <li>
                                    Data is retained only as long as necessary
                                    for project purposes
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            9. Limitation of Liability
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                To the maximum extent permitted by law:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>
                                    Trunal shall not be liable for any indirect,
                                    incidental, or consequential damages
                                </li>
                                <li>
                                    Our total liability is limited to the amount
                                    paid by the client for the specific project
                                </li>
                                <li>
                                    We are not responsible for client-side
                                    technical issues or third-party service
                                    failures
                                </li>
                                <li>
                                    We provide no warranties for third-party
                                    tools, plugins, or services
                                </li>
                                <li>
                                    Clients are responsible for maintaining
                                    backups of their data
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            10. Project Termination
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                                10.1 Termination by Client
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                Clients may terminate a project with 15 days
                                written notice. In such cases:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                                <li>
                                    Payment for completed work must be made in
                                    full
                                </li>
                                <li>
                                    No refund for advance payments or completed
                                    milestones
                                </li>
                                <li>
                                    Client receives deliverables completed up to
                                    the termination date
                                </li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3">
                                10.2 Termination by Trunal
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-4">
                                We reserve the right to terminate a project if:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>
                                    Client fails to make payments as per
                                    schedule
                                </li>
                                <li>
                                    Client requests illegal, unethical, or
                                    non-compliant work
                                </li>
                                <li>
                                    Client is unresponsive for 30+ days without
                                    valid reason
                                </li>
                                <li>
                                    Project requirements violate laws or our
                                    ethical standards
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            11. Communication and Support
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                All official communications must be conducted
                                through:
                            </p>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-4">
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Mail
                                            className="text-gray-400 mt-1 flex-shrink-0"
                                            size={18}
                                        />
                                        <div>
                                            <p className="font-medium text-white">
                                                Email
                                            </p>
                                            <a
                                                href="mailto:tarun@trunal.in"
                                                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                            >
                                                tarun@trunal.in
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Phone
                                            className="text-gray-400 mt-1 flex-shrink-0"
                                            size={18}
                                        />
                                        <div>
                                            <p className="font-medium text-white">
                                                Phone
                                            </p>
                                            <a
                                                href="tel:+916307272476"
                                                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                            >
                                                +91 630 727 2476
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Communications through unofficial channels
                                (personal emails, social media) will not be
                                considered valid for dispute resolution.
                            </p>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            12. Dispute Resolution
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                In case of any disputes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                                <li>
                                    Clients must first contact us at
                                    tarun@trunal.in for resolution
                                </li>
                                <li>
                                    We will make reasonable efforts to resolve
                                    issues amicably
                                </li>
                                <li>
                                    Mediation may be sought before pursuing
                                    legal action
                                </li>
                                <li>
                                    Chargebacks without prior communication may
                                    be treated as breach of agreement
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            13. Governing Law and Jurisdiction
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-6">
                                These Terms of Service are governed by the laws
                                of India, specifically:
                            </p>

                            {/* Jurisdiction Table */}
                            <div className="overflow-x-auto mb-6">
                                <table className="w-full border-collapse border border-white/20">
                                    <thead>
                                        <tr className="bg-white/5">
                                            <th className="border border-white/20 px-4 py-3 text-left font-semibold text-white">
                                                Client Location
                                            </th>
                                            <th className="border border-white/20 px-4 py-3 text-left font-semibold text-white">
                                                Applicable Laws
                                            </th>
                                            <th className="border border-white/20 px-4 py-3 text-left font-semibold text-white">
                                                Jurisdiction
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300">
                                        <tr>
                                            <td className="border border-white/20 px-4 py-3">
                                                India (Domestic)
                                            </td>
                                            <td className="border border-white/20 px-4 py-3">
                                                Consumer Protection Act, 2019 &
                                                IT Act, 2000
                                            </td>
                                            <td className="border border-white/20 px-4 py-3">
                                                Courts of Varanasi, India
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-white/20 px-4 py-3">
                                                International
                                            </td>
                                            <td className="border border-white/20 px-4 py-3">
                                                Indian laws apply primarily
                                            </td>
                                            <td className="border border-white/20 px-4 py-3">
                                                Courts of Varanasi, India
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-gray-300 leading-relaxed">
                                All disputes arising from these terms or our
                                services shall be subject to the exclusive
                                jurisdiction of the courts in{' '}
                                <strong className="text-white">
                                    Varanasi, Uttar Pradesh, India
                                </strong>
                                .
                            </p>
                        </div>
                    </section>

                    {/* Section 14 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            14. Modifications to Terms
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed">
                                We reserve the right to modify these Terms of
                                Service at any time. Changes will be effective
                                immediately upon posting on our website.
                                Continued use of our services after changes
                                constitutes acceptance of the modified terms.
                                Clients will be notified of significant changes
                                via email.
                            </p>
                        </div>
                    </section>

                    {/* Section 15 */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b-2 border-white/10">
                            15. Severability
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed">
                                If any provision of these Terms of Service is
                                found to be unenforceable or invalid, that
                                provision will be limited or eliminated to the
                                minimum extent necessary so that these terms
                                will otherwise remain in full force and effect.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Contact Section */}
                <div className="mt-16 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Questions or Concerns?
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        If you have any questions about these Terms of Service
                        or need clarification on any point, please don't
                        hesitate to contact us.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <Mail
                                className="text-gray-400 mt-1 flex-shrink-0"
                                size={20}
                            />
                            <div>
                                <p className="font-medium text-white mb-1">
                                    Email Us
                                </p>
                                <a
                                    href="mailto:tarun@trunal.in"
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    tarun@trunal.in
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Phone
                                className="text-gray-400 mt-1 flex-shrink-0"
                                size={20}
                            />
                            <div>
                                <p className="font-medium text-white mb-1">
                                    Call Us
                                </p>
                                <a
                                    href="tel:+916307272476"
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    +91 630 727 2476
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 md:col-span-2">
                            <MapPin
                                className="text-gray-400 mt-1 flex-shrink-0"
                                size={20}
                            />
                            <div>
                                <p className="font-medium text-white mb-1">
                                    Address
                                </p>
                                <p className="text-gray-300">
                                    Varanasi, Uttar Pradesh, India
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Top */}
                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
                    >
                        <ArrowLeft size={18} />
                        Return to Home
                    </Link>
                </div>
            </main>
            <FooterSection />
        </div>
    );
};

export default TermsOfService;
