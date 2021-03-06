import React from "react";
import Layout from "../components/Layout";
import ImprintStyle from '../styles/Imprint';

const Imprint = () => (
    <>
        <Layout/>
        <ImprintStyle />
        <div>
            <h1>Legal Disclosure</h1>
            Information in accordance with Section 5 TMG
            <br/><br/>Fibigerstraße 163<br/>Apt. 27<br/>22419 Hamburg<br/>
            <h2>Contact Information</h2>
            Telephone: +49 176 34371425<br/>E-Mail: <a
            href="mailto:timo@teemze.de">timo@teemze.de</a><br/>Internet
            address: <a href="http://teemze.de/" target="_blank">http://teemze.de/</a>
            <h2>Content</h2>
            This page has no commercial purpose and is only used as a personal project.<br/>
            This page is based on the following Gatsby Starter: <a
            href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">https://github.com/LekoArts/gatsby-starter-portfolio-cara</a><br/>
            The data from the "Skills" section is fetched from the <a href="https://developer.github.com/v3/">GitHub API</a>.
            This data is calculated using the total size of GitHub
            repositories. This does not necessarily display the actual skill regarding
            that language. Also note that the data is displayed using a logarithmic
            scale.
            <h2>Disclaimer</h2>
            Accountability for content<br/>
            The contents of our pages have been created with the utmost care. However, we cannot
            guarantee the contents'
            accuracy, completeness or topicality. According to statutory provisions, we are
            furthermore
            responsible for
            our own content on these web pages. In this matter, please note that we are not obliged
            to
            monitor
            the transmitted or saved information of third parties, or investigate circumstances
            pointing
            to illegal activity.
            Our obligations to remove or block the use of information under generally applicable
            laws
            remain unaffected by this as per
            §§ 8 to 10 of the Telemedia Act (TMG).

            <br/><br/>Accountability for links<br/>
            Responsibility for the content of
            external links (to web pages of third parties) lies solely with the operators of the
            linked pages. No violations were
            evident to us at the time of linking. Should any legal infringement become known to us,
            we will remove the respective
            link immediately.<br/><br/>Copyright<br/> Our web pages and their contents are subject
            to
            German copyright law. Unless
            expressly permitted by law, every form of utilizing, reproducing or processing
            works subject to copyright protection on our web pages requires the prior consent of the
            respective owner of the rights.
            Individual reproductions of a work are only allowed for private use.
            The materials from these pages are copyrighted and any unauthorized use may violate
            copyright laws.

            <br/><br/>
            <i>Quelle: </i><a href="http://www.translate-24h.de" target="_blank">translate-24h.de
            - Das Übersetzungsbüro im Internet</a> <br/><br/>
        </div>
    </>
)

export default Imprint