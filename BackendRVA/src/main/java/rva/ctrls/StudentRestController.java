package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import rva.jpa.Grupa;
import rva.jpa.Student;
import rva.repository.GrupaRepository;
import rva.repository.StudentRepository;

@RestController
@Api(tags= {"Student CRUD operacije"})
public class StudentRestController {
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private GrupaRepository grupaRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("student")
	@ApiOperation(value = "Vraća kolekciju svih studenata iz baze podataka")
	public Collection<Student> getStudenti(){
		return studentRepository.findAll();
	}
	
	@GetMapping("student/{id}")
	@ApiOperation(value = "Vraća studenta iz baze podataka čiji je ID prosleđen kao path varijabla")
	public ResponseEntity<Student> getStudent(@PathVariable("id") Integer id){
		Student student = studentRepository.getOne(id);
		return new ResponseEntity<Student>(student, HttpStatus.OK);
	}
	
	@GetMapping("studentZaGrupaId/{id}")
	@ApiOperation(value = "Vraća kolekciju studenata iz baze podataka čiji je id grupe vrednost prosleđena kao path varijabla")
	public Collection<Student> studentPoGrupiId(@PathVariable("id") int id){
		Grupa g = grupaRepository.getOne(id);
		return studentRepository.findByGrupa(g);
	}
	
	@GetMapping("studentBrojIndeksa/{brojIndeksa}")
	@ApiOperation(value = "Vraća kolekciju studenata koji u broju indeksa sadrže string prosleđen kao path varijabla")
	public Collection<Student> getStudentByBrojIndeksa(@PathVariable("brojIndeksa") String brojIndeksa){
		return studentRepository.findByBrojIndeksaContainingIgnoreCase(brojIndeksa);
	}
	
	@GetMapping("studentIme/{ime}")
	@ApiOperation(value = "Vraća kolekciju studenata koji u imenu sadrže string prosleđen kao path varijabla")
	public Collection<Student> getStudentByIme(@PathVariable("ime") String ime){
		return studentRepository.findByImeContainingIgnoreCase(ime);
	}
	
	@DeleteMapping ("student/{id}")
	@ApiOperation(value = "Briše studenta iz baze podataka čiji je ID prosleđen kao path varijabla")
	public ResponseEntity<Student> deleteStudent(@PathVariable("id") Integer id){
		if(!studentRepository.existsById(id))
			return new ResponseEntity<Student>(HttpStatus.NO_CONTENT);
		studentRepository.deleteById(id);
		if (id == -100)
			jdbcTemplate.execute(
					"INSERT INTO \"student\"(\"id\", \"ime\", \"prezime\", \"broj_indeksa\", \"grupa\", \"projekat\")\n"
							+ "VALUES (-100, 'Test ime', 'Test prezime', '01/2020', 1, 1);");

		return new ResponseEntity<Student>(HttpStatus.OK);
	}
	
	@PostMapping("student")
	@ApiOperation(value = "Upisuje studenta u bazu podataka")
	public ResponseEntity<Student> insertStudent(@RequestBody Student student){
		if(studentRepository.existsById(student.getId()))
			return new ResponseEntity<Student>(HttpStatus.CONFLICT);
		studentRepository.save(student);
		return new ResponseEntity<Student>(HttpStatus.OK);
	}
	
	@PutMapping("student")
	@ApiOperation(value = "Modifikuje studenta u bazi podataka")
	public ResponseEntity<Student> updateStudent(@RequestBody Student student){
		if(!studentRepository.existsById(student.getId()))
			return new ResponseEntity<Student>(HttpStatus.NO_CONTENT);
		studentRepository.save(student);
		return new ResponseEntity<Student>(HttpStatus.OK);
	}


}
