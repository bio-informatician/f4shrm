import React from 'react';
import { Table } from 'antd';

const PublicTreeTable = () => {
  const columns = [
    {
      title: 'Database',
      dataIndex: 'Database',
      key: 'Database',
    },
    {
      title: 'Table',
      dataIndex: 'Table',
      key: 'Table',
    },
    {
      title: 'Field',
      dataIndex: 'Field',
      key: 'Field',
    },
    {
      title: 'VirJenDB Field',
      dataIndex: 'VirJenDB Field',
      key: 'VirJenDB Field',
    },
    {
      title: 'NCBI Virus Field',
      dataIndex: 'NCBI Virus Field',
      key: 'NCBI Virus Field',
    },
    {
      title: 'NCBI Virus Field Description',
      dataIndex: 'NCBI Virus Field Description',
      key: 'NCBI Virus Field Description',
    },
    {
      title: 'BVBRC Field',
      dataIndex: 'BVBRC Field',
      key: 'BVBRC Field',
    },
    {
      title: 'Field Descriptions',
      dataIndex: 'Field Descriptions',
      key: 'Field Descriptions',
    },
  ];

  const data = [
    { Database: 'root', Table: '', Field: '', 'VirJenDB Field': '', 'NCBI Virus Field': '', 'NCBI Virus Field Description': '', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|', Table: '', Field: '', 'VirJenDB Field': '', 'NCBI Virus Field': '', 'NCBI Virus Field Description': '', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|----------', Table: 'collection', Field: 'country', 'VirJenDB Field': 'CollectionCountry', 'NCBI Virus Field': 'Country', 'NCBI Virus Field Description': 'Country - country of specimen collection (only country, no any additional information)', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|', Table: '|----------', Field: 'molecule_type', 'VirJenDB Field': '', 'NCBI Virus Field': 'Molecule_Type', 'NCBI Virus Field Description': 'Molecule type - viral nucleic acid type. Molecule type is provided by International Committee on Taxonomy of Viruses (ICTV) in the Master Species List and maintained in the NCBI Taxonomy database. RefSeqs that have "Unknown" molecule type belong to tax groups which were not recognized by the ICTV yet.', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|----------', Table: 'collection', Field: 'date', 'VirJenDB Field': 'CollectionYear', 'NCBI Virus Field': 'Collection_Date', 'NCBI Virus Field Description': 'Collection Date – virus specimen collection date.', 'BVBRC Field': 'Collection Date', 'Field Descriptions': 'Collection Date, in the isolate section' },
    { Database: '|----------', Table: 'collection', Field: 'host_name', 'VirJenDB Field': 'HostName', 'NCBI Virus Field': 'Host', 'NCBI Virus Field Description': 'Host- virus isolation host (read more about isolation host vocabulary mapping here: https://www.ncbi.nlm.nih.gov/labs/virus/vssi/docs/help/#filters-host). If isolation host is unknown (/host field of the GenBank record), but laboratory host is present (as indicated in /lab_host field of the GenBank record), the laboratory host will be present in the host column of the Results Table. If both isolation host and laboratory host can be mapped, only isolation host will be presented in the host column of the table.', 'BVBRC Field': 'Host Name', 'Field Descriptions': 'Host Name, in the Host section' },
    { Database: '|----------', Table: 'collection', Field: 'host_age', 'VirJenDB Field': 'HostAge', 'NCBI Virus Field': 'NA', 'NCBI Virus Field Description': 'NA', 'BVBRC Field': 'Host Age', 'Field Descriptions': 'Host Age: age category of human host' },
    { Database: '|----------', Table: 'collection', Field: 'host_group', 'VirJenDB Field': 'HostGroup', 'NCBI Virus Field': 'NA', 'NCBI Virus Field Description': 'NA', 'BVBRC Field': 'Host Group', 'Field Descriptions': 'Host Group: in Host Info section' },
    { Database: '|----------', Table: 'collection', Field: 'host_tissue', 'VirJenDB Field': 'CollectionTissue', 'NCBI Virus Field': 'Isolation_Source', 'NCBI Virus Field Description': 'Isolation source – sequence isolation source read more about isolation source here: https://www.ncbi.nlm.nih.gov/labs/virus/vssi/docs/help/#filters-isolation-source.', 'BVBRC Field': 'Isolation Source', 'Field Descriptions': 'Isolation source, in the Isolate section' },
    { Database: '|----------', Table: 'collection', Field: 'organization', 'VirJenDB Field': 'Organization', 'NCBI Virus Field': '', 'NCBI Virus Field Description': '', 'BVBRC Field': 'Sequencing Center', 'Field Descriptions': 'Sequencing Center -- institute at which the sample was sequenced, in Sequence Info section' },
    { Database: '|----------', Table: 'collection', Field: 'submitter', 'VirJenDB Field': 'Submitter', 'NCBI Virus Field': 'Submitters', 'NCBI Virus Field Description': 'Submitters - authors submitted the sequence. Only first submitter\'s name is displayed in the column (for example, Baranov,P.V., et al.). To obtain a full list of submitters, click on sequence accession number, this will open the details menu. Click on accession number in the details panel, this will open GenBank Entrez page with all information available for the selected sequence. Alternatively, you can use Download button with CSV format option. The column "Submitters" in the downloaded table will contain the name of all authors submitted each sequence.', 'BVBRC Field': '', 'Field Descriptions': 'Authors -- blank' },
    { Database: '|----------', Table: 'collection', Field: 'biosample_accession', 'VirJenDB Field': 'BioSample', 'NCBI Virus Field': 'BioSample', 'NCBI Virus Field Description': 'BioSample – NCBI BioSample accession number.', 'BVBRC Field': 'BioSample Accession', 'Field Descriptions': 'BioSample Accession -- NCBI BioSample accession number.' },
    { Database: '|----------', Table: 'collection', Field: 'bioproject', 'VirJenDB Field': 'BioProject', 'NCBI Virus Field': 'BioProject', 'NCBI Virus Field Description': 'BioProject – NCBI BioProject accession number.', 'BVBRC Field': 'BioProject Accession', 'Field Descriptions': 'BioSample Accession -- NCBI BioSample accession number.' },
    { Database: '|----------', Table: 'collection', Field: 'source_release_date', 'VirJenDB Field': 'ReleaseDate', 'NCBI Virus Field': 'Release_Date', 'NCBI Virus Field Description': 'Release date - the date when sequence was released (publicly appeared) in GenBank or other INSDC databases.', 'BVBRC Field': 'Date Inserted', 'Field Descriptions': 'Date Inserted -- in Additional info section' },
    { Database: '|----------', Table: 'collection', Field: 'sequencing_center', 'VirJenDB Field': 'SequencingCenter', 'NCBI Virus Field': 'NA', 'NCBI Virus Field Description': 'NA', 'BVBRC Field': 'Sequencing Center', 'Field Descriptions': 'Sequencing Center -- institute at which the sample was sequenced' },
    { Database: '|', Table: '', Field: '', 'VirJenDB Field': '', 'NCBI Virus Field': '', 'NCBI Virus Field Description': '', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|----------', Table: 'sample', Field: '', 'VirJenDB Field': '', 'NCBI Virus Field': '', 'NCBI Virus Field Description': '', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|', Table: '', Field: '', 'VirJenDB Field': '', 'NCBI Virus Field': '', 'NCBI Virus Field Description': '', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|', Table: '|----------', Field: 'sample_id', 'VirJenDB Field': 'SampleID', 'NCBI Virus Field': 'NA', 'NCBI Virus Field Description': 'NA', 'BVBRC Field': 'NA', 'Field Descriptions': 'NA' },
    { Database: '|----------', Table: '|----------', Field: 'genome_coverage', 'VirJenDB Field': 'Completeness', 'NCBI Virus Field': 'Nuc_Completeness', 'NCBI Virus Field Description': 'Nuc completeness - nucleotide completeness (note: it is preliminary data, not always accurate).', 'BVBRC Field': 'Genome Status', 'Field Descriptions': 'Genome Status -- in status section' },
    { Database: '|----------', Table: '|----------', Field: 'bvbrc_id', 'VirJenDB Field': 'BVBRCID', 'NCBI Virus Field': 'NA', 'NCBI Virus Field Description': 'NA', 'BVBRC Field': 'Genome ID', 'Field Descriptions': 'Genome ID -- BV-BRC genome identifier' },
    { Database: '|----------', Table: '|----------', Field: 'genbank_accession_number', 'VirJenDB Field': 'NCBIAccession', 'NCBI Virus Field': 'Accession', 'NCBI Virus Field Description': 'Accession - the NCBI accession number of the NCBI Virus database sequence. Reference sequence accessions marked with label "RefSeq".', 'BVBRC Field': 'GenBank Accessions', 'Field Descriptions': 'in Database Cross Reference section' },
    { Database: '|----------', Table: '|----------', Field: 'sample_name', 'VirJenDB Field': 'Name', 'NCBI Virus Field': 'NA', 'NCBI Virus Field Description': 'NA', 'BVBRC Field': 'NA', 'Field Descriptions': 'NA' },
    { Database: '|----------', Table: '|----------', Field: 'pmid', 'VirJenDB Field': 'PMID', 'NCBI Virus Field': 'Publications', 'NCBI Virus Field Description': 'Publications - links to the associated with sequences publications in PubMed.', 'BVBRC Field': 'Publication', 'Field Descriptions': 'PMID' },
    { Database: '|----------', Table: '|----------', Field: 'ncbi_txid', 'VirJenDB Field': 'TaxID', 'NCBI Virus Field': 'NCBI TaxID', 'NCBI Virus Field Description': 'NCBI Taxon ID', 'BVBRC Field': 'NCBI Taxon ID', 'Field Descriptions': 'NCBI Taxon ID -- NCBI taxon identifier' },
    { Database: '|----------', Table: '|----------', Field: 'sequence_gc_content', 'VirJenDB Field': 'GC', 'NCBI Virus Field': 'NA', 'NCBI Virus Field Description': 'NA', 'BVBRC Field': 'GC Content', 'Field Descriptions': 'GC Content -- (calculated?) percentage of G\'s and C\'s in the sequence' },
    { Database: '|----------', Table: '|----------', Field: 'sequence_length', 'VirJenDB Field': 'Length', 'NCBI Virus Field': 'Length', 'NCBI Virus Field Description': 'Length - sequence length.', 'BVBRC Field': 'Size', 'Field Descriptions': 'in Genome Statistics as Genome Length' },
    { Database: '|----------', Table: '|----------', Field: 'number_of_contigs', 'VirJenDB Field': 'NumberOfContigs', 'NCBI Virus Field': 'NA', 'NCBI Virus Field Description': 'NA', 'BVBRC Field': 'Contigs', 'Field Descriptions': 'Contigs -- number of contigs, in Genome Statistics section' },
    { Database: '|----------', Table: '|----------', Field: 'segment_name', 'VirJenDB Field': 'SegmentName', 'NCBI Virus Field': 'Segment', 'NCBI Virus Field Description': 'Segment – segment name in case of segmented viruses', 'BVBRC Field': 'Segment', 'Field Descriptions': 'Segment -- in Type info section' },
    { Database: '|----------', Table: '|----------', Field: 'sra_accession', 'VirJenDB Field': 'SRAAccession', 'NCBI Virus Field': 'SRA_Accession', 'NCBI Virus Field Description': 'SRA accession - NCBI Sequence Read Archive (SRA) accession number.', 'BVBRC Field': 'SRA Accession', 'Field Descriptions': 'no values' },
    { Database: '|----------', Table: '|----------', Field: 'molecule_type', 'VirJenDB Field': 'Moleculetype', 'NCBI Virus Field': 'Molecule_Type', 'NCBI Virus Field Description': 'Molecule type - viral nucleic acid type. Molecule type is provided by International Committee on Taxonomy of Viruses (ICTV) in the Master Species List (https://talk.ictvonline.org/files/master-species-lists/m/msl/13425) and maintained in the  NCBI Taxonomy database. RefSeqs that have "Unknown" molecule type belong to tax groups which were not recognized by the ICTV yet.', 'BVBRC Field': 'NA', 'Field Descriptions': 'NA' },
    { Database: '|----------', Table: '|----------', Field: 'representative', 'VirJenDB Field': 'Representative', 'NCBI Virus Field': 'Sequence type', 'NCBI Virus Field Description': 'Sequence type – complete/partial/proviral/refseq read more about sequence type here.', 'BVBRC Field': 'Reference', 'Field Descriptions': 'whether or not the sequence is a RefSeq (blank, Reference)' },
    { Database: '|----------', Table: '|----------', Field: 'refseq_flag', 'VirJenDB Field': 'Reference', 'NCBI Virus Field': 'Sequence type', 'NCBI Virus Field Description': 'Sequence type – complete/partial/proviral/refseq read more about sequence type here.', 'BVBRC Field': 'Reference', 'Field Descriptions': 'whether or not the sequence is a RefSeq (blank, Reference)' },
    { Database: '|----------', Table: '|----------', Field: 'bvbrc_quality', 'VirJenDB Field': 'GenomeQuality', 'NCBI Virus Field': 'NA', 'NCBI Virus Field Description': 'NA', 'BVBRC Field': 'Genome Quality', 'Field Descriptions': 'Genome Quality' },
    { Database: '|', Table: '', Field: '', 'VirJenDB Field': '', 'NCBI Virus Field': '', 'NCBI Virus Field Description': '', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|----------', Table: 'tree', Field: '', 'VirJenDB Field': '', 'NCBI Virus Field': '', 'NCBI Virus Field Description': '', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|', Table: '', Field: '', 'VirJenDB Field': '', 'NCBI Virus Field': '', 'NCBI Virus Field Description': '', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|----------', Table: 'dbsource', Field: '', 'VirJenDB Field': '', 'NCBI Virus Field': '', 'NCBI Virus Field Description': '', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|', Table: '', Field: '', 'VirJenDB Field': '', 'NCBI Virus Field': '', 'NCBI Virus Field Description': '', 'BVBRC Field': '', 'Field Descriptions': '' },
    { Database: '|----------', Table: 'db_name', Field: 'DBSource', 'VirJenDB Field': '', 'NCBI Virus Field': 'NA', 'NCBI Virus Field Description': 'NA', 'BVBRC Field': 'NA', 'Field Descriptions': 'NA' }
  ];
  

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      size="middle"
      // Add any additional properties or configurations as needed
    />
  );
};

export default PublicTreeTable;

  






