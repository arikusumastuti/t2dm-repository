import Cover from "@/components/Cover";

export default function About () {
    return (
        <>
            <Cover
                title="About"
                desc="About this repository"
            />
            <div className="relative px-8 md:px-16 xl:px-48 py-16">
                <div className="text-justify space-y-4">
                    <p>This repository contains comprehensive documentation on proteins, enzymes, metabolites, computational models, and relevant publications associated with the study. It also includes extracted features intended for the prediction, classification, and labeling of patients within Type 2 Diabetes Mellitus (T2DM) groups. The repository is structured to support and facilitate in-depth analyses related to T2DM. The repository is organized into two main components: (1) a repository for Protein-Protein Interaction (PPI) and Metabolic Network data, and (2) a repository for feature data derived from Metabolic Networks.</p>
                    <p>This repository is supported by <a className="text-blue-600 underline" target="_blank" href="https://www.gtexportal.org/home/downloads/adult-gtex/bulk_tissue_expression">Genotype-Tissue Expression (GTEx)</a>, Metabolic Atlas (<a className="text-blue-600 underline" target="_blank" href="https://metabolicatlas.org/gems/repository/11">Liver</a>, <a className="text-blue-600 underline" target="_blank" href="https://metabolicatlas.org/gems/repository/142">T2DM</a>), and <a className="text-blue-600 underline" target="_blank" href="https://www.ebi.ac.uk/gwas/efotraits/MONDO_0005148">T2DM GWAS Catalog</a></p>
                </div>
            </div>
        </>
    )
}