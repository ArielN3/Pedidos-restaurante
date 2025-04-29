import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import java.io.FileOutputStream;

public class GeradorPDF {

    public static String gerarPDF(String nome, String telefone, String mesa, String itens, double total) throws Exception {
        Document document = new Document();
        String nomeArquivo = "pedido_" + System.currentTimeMillis() + ".pdf";
        PdfWriter.getInstance(document, new FileOutputStream(nomeArquivo));
        document.open();

        document.add(new Paragraph("Pedido Restaurante Chinês"));
        document.add(new Paragraph("Cliente: " + nome));
        document.add(new Paragraph("Telefone: " + telefone));
        document.add(new Paragraph("Mesa: " + mesa));
        document.add(new Paragraph("Itens:"));
        document.add(new Paragraph(itens));
        document.add(new Paragraph("Total: R$" + String.format("%.2f", total)));

        document.close();
        return nomeArquivo;
    }

    public static void main(String[] args) {
        try {
            String nome = "João Silva";
            String telefone = "11987654321";
            String mesa = "5";
            String itens = "- Yakissoba - R$25\n- Frango Xadrez - R$28\n- Rolinho Primavera - R$10";
            double total = 63.0;

            String arquivo = gerarPDF(nome, telefone, mesa, itens, total);
            System.out.println("PDF gerado: " + arquivo);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
