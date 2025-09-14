import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import './Technologies.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technologies = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  const carouselRef = useRef(null);

  // Icon map remains the same as in your original code
 // Map technology names to Devicon (and related) colored icons
  const iconMap = (name) => {
    // Use @latest to ensure paths match current devicon package
    const cdn = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';
    const map = {
      // Frontend
      'React': `${cdn}/react/react-original.svg`,
      'Next.js': `${cdn}/nextjs/nextjs-original.svg`,
      'Angular': `${cdn}/angularjs/angularjs-plain.svg`,
      'Vue': `${cdn}/vuejs/vuejs-original.svg`,
      'TypeScript': `${cdn}/typescript/typescript-original.svg`,
      'JavaScript': `${cdn}/javascript/javascript-original.svg`,
      'Redux': `${cdn}/redux/redux-original.svg`,
      'Zustand': null,
      'Vuex': null,
      'NgRx': null,
      'Tailwind CSS': `${cdn}/tailwindcss/tailwindcss-original.svg`,
      'SCSS': `${cdn}/sass/sass-original.svg`,
      'Styled Components': `${cdn}/styledcomponents/styledcomponents-plain.svg`,
      'Vite': `${cdn}/vitejs/vitejs-original.svg`,
      'Webpack': `${cdn}/webpack/webpack-original.svg`,
      'Babel': `${cdn}/babel/babel-original.svg`,

      // Backend
      'Node.js': `${cdn}/nodejs/nodejs-original.svg`,
      'Express': `${cdn}/express/express-original.svg`,
      'NestJS': `${cdn}/nestjs/nestjs-original.svg`,
      'Deno': `${cdn}/denojs/denojs-original.svg`,
      'Python': `${cdn}/python/python-original.svg`,
      'Django': `${cdn}/django/django-plain.svg`,
      'FastAPI': `${cdn}/fastapi/fastapi-original.svg`,
      'Flask': `${cdn}/flask/flask-original.svg`,
      'Java': `${cdn}/java/java-original.svg`,
      'Spring Boot': `${cdn}/spring/spring-original.svg`,
      'Kotlin': `${cdn}/kotlin/kotlin-original.svg`,
      'Go': `${cdn}/go/go-original.svg`,
      'Gin': null,
      'Fiber': null,
      'Rust': `${cdn}/rust/rust-original.svg`,
      'Actix': null,
      'ASP.NET Core': `${cdn}/dotnetcore/dotnetcore-plain.svg`,
      'REST': null,
      'GraphQL': `${cdn}/graphql/graphql-plain.svg`,
      'Apollo': null,

      // Mobile
      'React Native': `${cdn}/react/react-original.svg`,
      'Flutter': `${cdn}/flutter/flutter-original.svg`,
      'Android (Kotlin)': `${cdn}/android/android-plain.svg`,
      'iOS (Swift)': `${cdn}/swift/swift-original.svg`,
      'Ionic': `${cdn}/ionic/ionic-original.svg`,
      'Capacitor': null,

      // Databases
      'PostgreSQL': `${cdn}/postgresql/postgresql-original.svg`,
      'MySQL': `${cdn}/mysql/mysql-original.svg`,
      'MariaDB': `${cdn}/mariadb/mariadb-original.svg`,
      'MongoDB': `${cdn}/mongodb/mongodb-original.svg`,
      'CouchDB': `${cdn}/couchdb/couchdb-original.svg`,
      'Redis': `${cdn}/redis/redis-original.svg`,
      'Memcached': null,
      'Elasticsearch': `${cdn}/elasticsearch/elasticsearch-plain.svg`,
      'OpenSearch': null,
      'Snowflake': `${cdn}/snowflake/snowflake-plain.svg`,
      'BigQuery': `${cdn}/googlecloud/googlecloud-original.svg`,
      'Redshift': `${cdn}/amazonwebservices/amazonwebservices-original.svg`,

      // BaaS & Serverless
      'Firebase': `${cdn}/firebase/firebase-plain.svg`,
      'Supabase': `${cdn}/supabase/supabase-original.svg`,
      'Appwrite': `${cdn}/appwrite/appwrite-original.svg`,
      'AWS Amplify': `${cdn}/awsamplify/awsamplify-plain.svg`,
      'Auth0': `${cdn}/auth0/auth0-original.svg`,

      // Data & Streaming
      'Apache Kafka': `${cdn}/apachekafka/apachekafka-original.svg`,
      'RabbitMQ': `${cdn}/rabbitmq/rabbitmq-original.svg`,
      'Apache Spark': `${cdn}/apachespark/apachespark-original.svg`,
      // Devicon uses 'apacheflink' slug
      'Flink': `${cdn}/apacheflink/apacheflink-original.svg`,
      'Airflow': `${cdn}/apacheairflow/apacheairflow-original.svg`,
      'dbt': `${cdn}/dbt/dbt-original.svg`,
      'TimescaleDB': null,
      'ClickHouse': `${cdn}/clickhouse/clickhouse-original.svg`,

      // DevOps & CI/CD
      'Docker': `${cdn}/docker/docker-original.svg`,
      'Kubernetes': `${cdn}/kubernetes/kubernetes-plain.svg`,
      'GitHub Actions': `${cdn}/githubactions/githubactions-plain.svg`,
      'GitLab CI': `${cdn}/gitlab/gitlab-plain.svg`,
      'Jenkins': `${cdn}/jenkins/jenkins-original.svg`,
      'Argo CD': null,
      'Helm': `${cdn}/helm/helm-original.svg`,
      'Kustomize': null,
      'Nginx': `${cdn}/nginx/nginx-original.svg`,
      'Traefik': `${cdn}/traefikproxy/traefikproxy-original.svg`,
      'HAProxy': null,

      // Cloud & Infra
      'AWS': `${cdn}/amazonwebservices/amazonwebservices-original.svg`,
      'Azure': `${cdn}/azure/azure-original.svg`,
      'GCP': `${cdn}/googlecloud/googlecloud-original.svg`,
      'Serverless Functions': `${cdn}/serverless/serverless-original.svg`,
      'CDN': `${cdn}/cloudflare/cloudflare-original.svg`,
      'DNS': null,
      'Load Balancing': null,
      'Terraform': `${cdn}/terraform/terraform-original.svg`,
      'Pulumi': `${cdn}/pulumi/pulumi-plain.svg`,
      'Ansible': `${cdn}/ansible/ansible-original.svg`,

      // Testing & QA
      'Jest': `${cdn}/jest/jest-plain.svg`,
      'Vitest': null,
      'Mocha': `${cdn}/mocha/mocha-plain.svg`,
      'Cypress': `${cdn}/cypressio/cypressio-plain.svg`,
      'Playwright': `${cdn}/playwright/playwright-original.svg`,
      'Selenium': `${cdn}/selenium/selenium-original.svg`,
      'Testing Library': null,
      'Pact': null,
      'Postman': `${cdn}/postman/postman-plain.svg`,
      'Newman': `${cdn}/postman/postman-plain.svg`,
      'k6': `${cdn}/k6/k6-original.svg`,

      // Observability
      'Prometheus': `${cdn}/prometheus/prometheus-original.svg`,
      'Grafana': `${cdn}/grafana/grafana-original.svg`,
      'Fluentd': `${cdn}/fluentd/fluentd-original.svg`,
      'Kibana': `${cdn}/kibana/kibana-original.svg`,
      'OpenTelemetry': null,
      'Jaeger': `${cdn}/jaegertracing/jaegertracing-original.svg`,
      'Sentry': `${cdn}/sentry/sentry-original.svg`,
      'Datadog': `${cdn}/datadog/datadog-original.svg`,
      'New Relic': `${cdn}/newrelic/newrelic-original.svg`,

      // Security
      'OAuth 2.0': null,
      'OIDC': null,
      'JWT': null,
      'OWASP ASVS': null,
      'ZAP': null,
      'Snyk': `${cdn}/snyk/snyk-original.svg`,
      'HashiCorp Vault': `${cdn}/vault/vault-original.svg`,
      'KMS': null,
      'mTLS': null,
      'WAF': null,
      'CSP': null,

      // AI/ML & Analytics
      'Pandas': `${cdn}/pandas/pandas-original.svg`,
      'NumPy': `${cdn}/numpy/numpy-original.svg`,
      'Scikit-learn': `${cdn}/scikitlearn/scikitlearn-original.svg`,
      'TensorFlow': `${cdn}/tensorflow/tensorflow-original.svg`,
      'PyTorch': `${cdn}/pytorch/pytorch-original.svg`,
      'MLflow': `${cdn}/mlflow/mlflow-original.svg`,
      'SageMaker': `${cdn}/amazonwebservices/amazonwebservices-original.svg`,
      'Vertex AI': `${cdn}/googlecloud/googlecloud-original.svg`,
      'Tableau': `${cdn}/tableau/tableau-original.svg`,
      'Power BI': `${cdn}/powerbi/powerbi-original.svg`,
      'Superset': null,

      // APIs & Integrations
      'OpenAPI/Swagger': `${cdn}/swagger/swagger-original.svg`,
      'gRPC': null,
      'WebSockets': null,
      'SSE': null,
      'Stripe': `${cdn}/stripe/stripe-original.svg`,
      'PayPal': `${cdn}/paypal/paypal-original.svg`,

      // Caching & Performance
      'CloudFront': `${cdn}/amazonwebservices/amazonwebservices-original.svg`,
      'Cloudflare': `${cdn}/cloudflare/cloudflare-original.svg`,
      'Edge Functions': `${cdn}/cloudflare/cloudflare-original.svg`,
      'Workers': `${cdn}/cloudflare/cloudflare-original.svg`,

      // IaC
      'Crossplane': null,
      'AWS CDK': `${cdn}/amazonwebservices/amazonwebservices-original.svg`,

      // CMS & E‑commerce
      'WordPress': `${cdn}/wordpress/wordpress-plain.svg`,
      'Strapi': `${cdn}/strapi/strapi-original.svg`,
      'Sanity': null,
      'Shopify': `${cdn}/shopify/shopify-original.svg`,
      'Magento': `${cdn}/magento/magento-original.svg`,
      'WooCommerce': null,
      'Contentful': `${cdn}/contentful/contentful-original.svg`,
      'Ghost': `${cdn}/ghost/ghost-original.svg`,

      // Collaboration & PM
      'Jira': `${cdn}/jira/jira-original.svg`,
      'Linear': null,
      'Trello': `${cdn}/trello/trello-plain.svg`,
      'Confluence': `${cdn}/confluence/confluence-original.svg`,
      'Notion': `${cdn}/notion/notion-original.svg`,
      'Slack': `${cdn}/slack/slack-original.svg`,
      'Microsoft Teams': `${cdn}/microsoft/microsoft-original.svg`,

      // Design & Prototyping
      'Figma': `${cdn}/figma/figma-original.svg`,
      'Adobe XD': `${cdn}/xd/xd-plain.svg`,
      'Storybook': `${cdn}/storybook/storybook-original.svg`,
      'Zeplin': null,
      'Lottie': null,
      'SVG': null,

      // Version control & quality
      'Git': `${cdn}/git/git-original.svg`,
      'GitHub': `${cdn}/github/github-original.svg`,
      'GitLab': `${cdn}/gitlab/gitlab-plain.svg`,
      'Bitbucket': `${cdn}/bitbucket/bitbucket-original.svg`,
      'Conventional Commits': null,
      'Semantic Release': null,
      'ESLint': `${cdn}/eslint/eslint-original.svg`,
      'Prettier': `${cdn}/prettier/prettier-original.svg`,
      'SonarQube': `${cdn}/sonarqube/sonarqube-original.svg`,
    };
    return map[name] || null;
  };

  const categories = [
    {
      title: 'Frontend',
      delay: 100,
      items: ['React', 'Next.js', 'Angular', 'Vue', 'TypeScript', 'JavaScript', 'Redux', 'Zustand', 'Vuex', 'NgRx', 'Tailwind CSS', 'SCSS', 'Styled Components', 'Vite', 'Webpack', 'Babel']
    },
    {
      title: 'Backend',
      delay: 150,
      items: ['Node.js', 'Express', 'NestJS', 'Deno', 'Python', 'Django', 'FastAPI', 'Flask', 'Java', 'Spring Boot', 'Kotlin', 'Go', 'Gin', 'Fiber', 'Rust', 'Actix', 'ASP.NET Core', 'REST', 'GraphQL', 'Apollo']
    },
    {
      title: 'Mobile',
      delay: 200,
      items: ['React Native', 'Flutter', 'Android (Kotlin)', 'iOS (Swift)', 'Ionic', 'Capacitor']
    },
    {
      title: 'Databases',
      delay: 250,
      items: ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB', 'CouchDB', 'Redis', 'Memcached', 'Elasticsearch', 'OpenSearch', 'Snowflake', 'BigQuery', 'Redshift']
    },
    {
      title: 'BaaS & Serverless',
      delay: 275,
      items: ['Firebase', 'Supabase', 'Appwrite', 'AWS Amplify', 'Auth0']
    },
    {
      title: 'Data & Streaming',
      delay: 300,
      items: ['Apache Kafka', 'RabbitMQ', 'Apache Spark', 'Flink', 'Airflow', 'dbt', 'TimescaleDB', 'ClickHouse']
    },
    {
      title: 'DevOps & CI/CD',
      delay: 350,
      items: ['Docker', 'Kubernetes', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Argo CD', 'Helm', 'Kustomize', 'Nginx', 'Traefik', 'HAProxy']
    },
    {
      title: 'Cloud & Infrastructure',
      delay: 400,
      items: ['AWS', 'Azure', 'GCP', 'Serverless Functions', 'CDN', 'DNS', 'Load Balancing', 'Terraform', 'Pulumi', 'Ansible']
    },
    {
      title: 'Testing & QA',
      delay: 450,
      items: ['Jest', 'Vitest', 'Mocha', 'Cypress', 'Playwright', 'Selenium', 'Testing Library', 'Pact', 'Postman', 'Newman', 'k6']
    },
    {
      title: 'Observability',
      delay: 500,
      items: ['Prometheus', 'Grafana', 'Elasticsearch', 'Fluentd', 'Kibana', 'OpenTelemetry', 'Jaeger', 'Sentry', 'Datadog', 'New Relic']
    },
    {
      title: 'Security',
      delay: 550,
      items: ['OAuth 2.0', 'OIDC', 'JWT', 'OWASP ASVS', 'ZAP', 'Snyk', 'HashiCorp Vault', 'KMS', 'mTLS', 'WAF', 'CSP']
    },
    {
      title: 'AI/ML & Analytics',
      delay: 600,
      items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'MLflow', 'SageMaker', 'Vertex AI', 'Tableau', 'Power BI', 'Superset']
    },
    {
      title: 'APIs & Integrations',
      delay: 650,
      items: ['OpenAPI/Swagger', 'Postman', 'gRPC', 'WebSockets', 'SSE', 'Stripe', 'PayPal']
    },
    {
      title: 'Caching & Performance',
      delay: 700,
      items: ['Redis', 'CloudFront', 'Cloudflare', 'Edge Functions', 'Workers']
    },
    {
      title: 'Infrastructure as Code',
      delay: 750,
      items: ['Terraform', 'Pulumi', 'Ansible', 'Packer', 'Crossplane', 'AWS CDK']
    },
    {
      title: 'CMS & E‑commerce',
      delay: 800,
      items: ['WordPress', 'Strapi', 'Sanity', 'Shopify', 'Magento', 'WooCommerce', 'Contentful', 'Ghost']
    },
    {
      title: 'Collaboration & PM',
      delay: 850,
      items: ['Jira', 'Linear', 'Trello', 'Confluence', 'Notion', 'Slack', 'Microsoft Teams']
    },
    {
      title: 'Design & Prototyping',
      delay: 900,
      items: ['Figma', 'Adobe XD', 'Storybook', 'Zeplin', 'Lottie', 'SVG']
    },
    {
      title: 'Version Control & Quality',
      delay: 950,
      items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Conventional Commits', 'Semantic Release', 'ESLint', 'Prettier', 'SonarQube']
    }
  ];

  // Scroll navigation functions
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Categories defined above

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://primetelsolutionsfze.com/technologies" />
      </Helmet>
      <section className="section technologies-section" id="technologies" aria-labelledby="technologies-heading">
        <div className="particles-bg" id="particles-js" data-aos="fade-in" data-aos-delay="100" role="presentation"></div>
        <div className="aurora-bg" aria-hidden="true"></div>
        <div className="section-content">
          <header className="section-header" data-aos="fade-up">
            <h1 className="section-heading" id="technologies-heading" data-aos="fade-right" data-aos-delay="100">Our <span className="highlight">Tech Stack</span></h1>
            <p className="section-subtitle" data-aos="fade-left" data-aos-delay="200">Comprehensive, modern stack for a full-spectrum software IT company</p>
          </header>
          
          <div className="carousel-controls">
            <button className="carousel-nav-btn prev" onClick={scrollLeft} aria-label="Scroll left">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="carousel-nav-btn next" onClick={scrollRight} aria-label="Scroll right">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="tech-carousel" ref={carouselRef} role="list" aria-label="Tech Categories">
            {categories.map((cat, idx) => {
              return (
                <article
                  className={`tech-category open`}
                  data-aos={idx % 3 === 0 ? 'flip-left' : idx % 3 === 1 ? 'flip-up' : 'flip-right'}
                  data-aos-delay={cat.delay}
                  role="listitem"
                  key={cat.title}
                >
                  <div className="category-header">
                    <div className="pulse-dot" aria-hidden="true"></div>
                    <h3>{cat.title}</h3>
                  </div>
                  <div id={`${cat.title}-panel`} className="accordion-panel">
                    <ul className={`icons-grid ${cat.items.length > 7 ? 'two-col' : ''}`} aria-label={`${cat.title} technologies`}>
                      {cat.items.map((name, i) => {
                        const src = iconMap(name);
                        const darkSet = new Set(['Next.js', 'Express', 'GitHub', 'Swagger', 'OpenAPI/Swagger']);
                        const isDark = darkSet.has(name);
                        // Silence expected missing icons (concepts/tools without devicon logos)
                        const expectedNoIcon = new Set([
                          'Zustand','Vuex','NgRx','Gin','Fiber','Actix','REST','Apollo','Capacitor','Memcached','OpenSearch','TimescaleDB','Argo CD','Kustomize','HAProxy','DNS','Load Balancing','Vitest','Testing Library','Pact','OpenTelemetry','OAuth 2.0','OIDC','JWT','OWASP ASVS','ZAP','KMS','mTLS','WAF','CSP','Superset','gRPC','WebSockets','SSE','Packer','Crossplane','Sanity','WooCommerce','Linear','Zeplin','Lottie','SVG','Edge Functions','Workers','Serverless Functions','CDN','Conventional Commits','Semantic Release','Auth0'
                        ]);
                        if (!src && !expectedNoIcon.has(name) && process.env.NODE_ENV === 'development') {
                          // Log only unexpected missing icons during development
                          // eslint-disable-next-line no-console
                          console.warn('[Tech Icon Missing]', name, 'in category', cat.title);
                        }
                        return (
                          <li key={`${cat.title}-${name}`} data-aos="fade-right" data-aos-delay={cat.delay + 150 + i * 20}>
                            <div className="tech-item">
                              <div className="tech-icon-wrapper">
                                {src ? (
                                  <img
                                    className={`tech-icon ${isDark ? 'icon-dark' : ''}`}
                                    src={src}
                                    alt={name}
                                    loading="lazy"
                                    onError={(e) => {
                                      console.error('[Tech Icon Load Error]', name, '->', src);
                                      e.currentTarget.style.display = 'none';
                                      const parent = e.currentTarget.parentElement;
                                      if (parent) {
                                        // show placeholder if load fails
                                        const ph = document.createElement('span');
                                        ph.className = 'tech-icon-placeholder';
                                        parent.appendChild(ph);
                                      }
                                    }}
                                  />
                                ) : (
                                  <span className="tech-icon-placeholder" aria-hidden="true"></span>
                                )}
                              </div>
                              <span className="tech-name">{name}</span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;