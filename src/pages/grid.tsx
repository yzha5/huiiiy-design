import { Col, Row } from "../packages/grid";

export default function GridPage() {
  return (
    <div className="container">
      <Row smColumns={4} mdColumns={5} lgColumns={6}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </Row>
      <div className="row row-cols-sm-4 row-cols-md-5 row-cols-lg-6">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
      </div>
      <Row>
        <Col>1</Col>
        <Col>2</Col>
        <Col>3</Col>
        <Col>4</Col>
        <Col mdWidth={6}>5</Col>
        <Col>6</Col>
        <Col>7</Col>
        <Col>8</Col>
        <Col>9</Col>
        <Col>10</Col>
      </Row>
      <div className="row">
        <div className="col">1</div>
        <div className="col">2</div>
        <div className="col">3</div>
        <div className="col">4</div>
        <div className="col-md-6">5</div>
        <div className="col">6</div>
        <div className="col">7</div>
        <div className="col">8</div>
        <div className="col">9</div>
        <div className="col">10</div>
      </div>
    </div>
  );
}
