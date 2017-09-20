import { BlankNode, DataFactory, DefaultGraph, Literal, NamedNode, Quad, Sink, Source, Store, Stream, Triple, Term,
  Variable } from "rdf-js";
import { EventEmitter } from "events";

function test_terms() {
    // Only types are checked in this tests,
    // so this does not have to be functional.
    const someTerm: Term = <any> {};

    const namedNode: NamedNode = <any> {};
    console.log(namedNode.termType);
    console.log(namedNode.value);
    namedNode.equals(someTerm);

    const blankNode: BlankNode = <any> {};
    console.log(blankNode.termType);
    console.log(blankNode.value);
    blankNode.equals(someTerm);

    const literal: Literal = <any> {};
    console.log(literal.termType);
    console.log(literal.value);
    console.log(literal.language);
    console.log(literal.datatype);
    literal.equals(someTerm);

    const variable: Variable = <any> {};
    console.log(variable.termType);
    console.log(variable.value);
    variable.equals(someTerm);

    const defaultGraph: DefaultGraph = <any> {};
    console.log(defaultGraph.termType);
    console.log(defaultGraph.value);
    defaultGraph.equals(someTerm);
}

function test_quads() {
    const quad: Quad = <any> {};
    console.log(quad.subject);
    console.log(quad.subject.termType);
    console.log(quad.subject.value);
    console.log(quad.predicate);
    console.log(quad.predicate.termType);
    console.log(quad.predicate.value);
    console.log(quad.object);
    console.log(quad.object.termType);
    console.log(quad.object.value);
    console.log(quad.graph);
    console.log(quad.graph.termType);
    console.log(quad.graph.value);
    quad.equals(quad);

    const triple: Triple = quad;
    console.log(triple.subject);
    console.log(triple.subject.termType);
    console.log(triple.subject.value);
    console.log(triple.predicate);
    console.log(triple.predicate.termType);
    console.log(triple.predicate.value);
    console.log(triple.object);
    console.log(triple.object.termType);
    console.log(triple.object.value);
    console.log(triple.graph);
    console.log(triple.graph.termType);
    console.log(triple.graph.value);
    triple.equals(quad);
    quad.equals(triple);
}

function test_datafactory() {
    const dataFactory: DataFactory = <any> {};

    const namedNode: NamedNode = dataFactory.namedNode('http://example.org');

    const blankNode1: BlankNode = dataFactory.blankNode('b1');
    const blankNode2: BlankNode = dataFactory.blankNode();

    const literal1: Literal = dataFactory.literal('abc');
    const literal2: Literal = dataFactory.literal('abc', 'en-us');
    const literal3: Literal = dataFactory.literal('abc', namedNode);

    const variable: Variable = dataFactory.variable ? dataFactory.variable('v1') : <any> {};

    const term: Term = <any> {};
    const triple: Quad = dataFactory.triple(term, term, term);
    const quad: Quad = dataFactory.quad(term, term, term, term);
}

function test_stream() {
    const stream: Stream = <any> {};
    const quad: Quad = stream.read();

    const term: Term = <any> {};
    const source: Source = <any> {};
    const matchStream1: Stream = source.match();
    const matchStream2: Stream = source.match(term);
    const matchStream3: Stream = source.match(/.*/);
    const matchStream4: Stream = source.match(term, term);
    const matchStream5: Stream = source.match(term, /.*/);
    const matchStream6: Stream = source.match(term, term, term);
    const matchStream7: Stream = source.match(term, term, /.*/);
    const matchStream8: Stream = source.match(term, term, term, term);
    const matchStream9: Stream = source.match(term, term, term, /.*/);

    const sink: Sink = <any> {};
    const eventEmitter1: EventEmitter = sink.import(stream);

    const store: Store = <any> {};
    const storeSource: Source = store;
    const storeSink: Sink = store;
    const eventEmitter2: EventEmitter = store.remove(stream);
    const eventEmitter3: EventEmitter = store.removeMatches();
    const eventEmitter4: EventEmitter = store.removeMatches(term);
    const eventEmitter5: EventEmitter = store.removeMatches(/.*/);
    const eventEmitter6: EventEmitter = store.removeMatches(term, term);
    const eventEmitter7: EventEmitter = store.removeMatches(term, /.*/);
    const eventEmitter8: EventEmitter = store.removeMatches(term, term, term);
    const eventEmitter9: EventEmitter = store.removeMatches(term, term, /.*/);
    const eventEmitter10: EventEmitter = store.removeMatches(term, term, term, term);
    const eventEmitter11: EventEmitter = store.removeMatches(term, term, term, /.*/);
    const eventEmitter12: EventEmitter = store.deleteGraph(term);
    const eventEmitter13: EventEmitter = store.deleteGraph('http://example.org');
}
