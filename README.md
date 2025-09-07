# DevOps Portfolio Project

This project demonstrates a **complete DevOps monitoring and CI/CD stack**, along with a **Node.js + React application**, running in Docker containers. It is ideal for showcasing **full-stack DevOps skills**.

---

## Project Components

* **Frontend App:** Node.js, React, TypeScript, Tailwind CSS, shadcn-ui, Vite
* **Monitoring:** Prometheus, Grafana
* **Tracing:** Jaeger
* **CI/CD:** Jenkins
* **Containerization:** Docker & Docker Compose

---

## Local Development

You can work on this project locally using your preferred IDE or terminal.

### 1. Clone the Repository

```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

Your app will now be accessible at `http://localhost:3000`.

---

## Docker Support

This project includes a **Dockerfile** for the frontend app. You can build and run it as a container:

```bash
# Build Docker image
docker build -t pushtest-dev .
```

* **Dockerfile** ensures that the app runs consistently across environments.
* Works seamlessly with your **Docker Compose stack** for monitoring and CI/CD services.

---

## VPS Setup & Data Persistence

To ensure your monitoring tools and Jenkins retain data across restarts:

1. SSH into your VPS.
2. Create a `/data` folder in the root directory:

```bash
sudo mkdir /data
cd /data
```

3. Inside `/data`, create persistent storage folders:

```bash
sudo mkdir grafana_data jaeger_data jenkins_data prometheus_data
```

4. (Optional) Set permissions:

```bash
sudo chown -R $USER:$USER /data/*
```

These folders will be used by Docker volumes for Grafana, Jaeger, Jenkins, and Prometheus.

---

## Deploying the Full Stack

Using Docker Compose, you can bring up the entire DevOps environment:

```bash
docker compose up -d
```

### Access Services

| Service    | URL                      |
| ---------- | ------------------------ |
| Grafana    | http\://\<VPS\_IP>:3000  |
| Prometheus | http\://\<VPS\_IP>:9090  |
| Jaeger     | http\://\<VPS\_IP>:16686 |
| Jenkins    | http\://\<VPS\_IP>:8080  |

* Jenkins pipeline can be extended to include **SonarQube analysis**, **build/test stages**, or **dummy long-running tasks**.
* Grafana dashboards can be connected to **Prometheus and Node Exporter / cAdvisor** for live metrics.

---

## Notes & Tips

* The project is designed for **portfolio showcase**, so visitors can interact with the frontend app, monitoring dashboards, and CI/CD pipelines.
* Docker volumes ensure **data persistence**, even after container restarts.
* The **Dockerfile** ensures the frontend app is portable and consistent across environments.