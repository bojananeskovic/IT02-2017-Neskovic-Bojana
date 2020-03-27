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

import rva.jpa.Smer;
import rva.repository.SmerRepository;

@RestController
public class SmerRestController {
	
	@Autowired
	private SmerRepository smerRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("smer")
	public Collection<Smer> getSmer() {
		return smerRepository.findAll();
	}
	
	@GetMapping("smer/{id}")
	public Smer getSmer(@PathVariable("id") Integer id) {
		return smerRepository.getOne(id);
	}
	
	@GetMapping("smerNaziv/{naziv}")
	public Collection<Smer> getSmerByNaziv(@PathVariable("naziv") String naziv) {
		return smerRepository.findByNazivContainingIgnoreCase(naziv);
	}
	
	@DeleteMapping("smer/{id}")
	public ResponseEntity<Smer> deleteSmer(@PathVariable("id") Integer id) {
		if (!smerRepository.existsById(id))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		smerRepository.deleteById(id);
		if (id == -100)
			jdbcTemplate.execute(
					"INSERT INTO \"smer\"(\"id\", \"naziv\", \"oznaka\")VALUES(-100, 'Naziv test', 'Oznaka test')");
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("smer")
	public ResponseEntity<Smer> insertSmer(@RequestBody Smer smer) {
		if (!smerRepository.existsById(smer.getId())) {
			smerRepository.save(smer);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("smer")
	public ResponseEntity<Smer> updateSmer(@RequestBody Smer smer) {
		if (!smerRepository.existsById(smer.getId()))
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		smerRepository.save(smer);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
