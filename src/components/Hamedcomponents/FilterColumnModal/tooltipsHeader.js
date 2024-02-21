// tooltipData.js
const tooltipsHeader = {
  Abbreviation: "Abbreviation -- Virus name abbreviation(s)",
  Assembly_accession: "BV: Assembly Accession -- NCBI Assembly accession number",
  Bioproject: "BioProject -- NCBI BioProject accession number.",
  Biosample_accession: "BioSample – NCBI BioSample accession number",
  BVBRCID: "BV: Genome ID -- BV-BRC genome identifier",
  Bvbrc_quality: "BV: Genome Quality",
  CollectionCountry: "Country of specimen collection",
  CollectionYear: "Collection Date",
  DBSource: "Database Source Name",
  NCBIAccession: "Accession - the NCBI accession number of the NCBI Virus database sequence. Reference sequence accessions marked with label (RefSeq)",
  Completeness: "Nuc completeness - nucleotide completeness (note: it is preliminary data, not always accurate)",
  HostAge: "BV: Host Age: age category of human host ",
    HostGroup: "Tooltip for HostGroup",
  HostName: "NV: Host – virus isolation host (read more about isolation host vocabulary mapping). If isolation host is unknown (/host field of the GenBank record), but laboratory host is present (as indicated in /lab_host field of the GenBank record), the laboratory host will be present in the host column of the Results Table. If both isolation host and laboratory host can be mapped, only isolation host will be presented in the host column of the table.BV: Host Name, in the Host section",
  CollectionTissue: "NV: Isolation source – sequence isolation source read more about isolation source here.BV: Isolation source, in the Isolate section (probably the same)",
  Moleculetype: "Molecule type - viral nucleic acid type",
  NumberOfContigs: "BV: Contigs -- number of contigs",
  Organization: "Tooltip for Organization",
  PMID: "Publications - links to the associated with sequences publications in PubMed",
  Representative: "BV: whether or not the sequence is a RefSeq (blank, Reference)",
  Reference: "RefSeq - NCBI Reference Sequences",
  SampleID: "SampleID",
  Name: "NV: Segment – segment name in case of segmented viruses",
  SegmentName: "NV: Segment – segment name in case of segmented viruses",
  GC: "Nuc completeness - nucleotide completeness (note: it is preliminary data, not always accurate)",
  Length: "sequence_length",
  SequencingCenter: "BV: Sequencing Center -- institute at which the sample was sequenced",
  ReleaseDate: "Release date - the date when sequence was released (publicly appeared) in GenBank or other INSDC databases",
  SRAAccession: "SRA accession - NCBI Sequence Read Archive (SRA) accession number",
  Submitter: "NV: Submitters - authors submitted the sequence. Only first submitter's name is displayed in the column",
  TaxID: "BV: NCBI Taxon ID -- NCBI taxon identifier",
  Variant:"Isolate - Individual isolate from which the sequence was obtained, typically an alphanumeric sample ID. Isolate name parsed from (isolate) field of GenBank record. SARS-CoV-2 sequence isolate name is formatted according to the Coronaviridae Study Group of the International Committee on Taxonomy of Viruses (ICTV) definitions"
};
  
  export default tooltipsHeader;
  