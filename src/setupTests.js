import Enzyme from "enzyme";
import { createSerializer } from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
// import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
